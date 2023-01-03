const express = require('express');
var validator = require("email-validator");
var rn = require("random-number");
const config = require("config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const router = express.Router();
const user = require("../models/User")
const Signup = require('../models/Signup');
const { json } = require('body-parser');
const nodemailer = require("nodemailer");
const { has } = require("config");
const User = require('../models/User');





let password;

//add nodemailer  *****
const mailer_auth = {
  user: "apikey",
  pass: process.env.SEND_GRID_API_KEY,
};
const transport = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 25,
  secure: false,
  service: "SendGrid",
  requireTLS: false,
  auth: mailer_auth,
});










router.get("/", function (req, res) {
  res.send("Hello World!");
});


router.post("/signup", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  let type;

  let options = {
    min: 100000,
    max: 999999,
    integer: true,
  };

  const otp = rn(options);

  console.log({ name, email })

  let isValidEmail = validator.validate(email);
  if (isValidEmail) {
    type = "email";
  } else {
    const no = isNaN(email);
    const mobile = email.toString();
    if (!no && mobile.length === 10) {
      type = "contact No";
    } else {
      res.json(
        JSON.stringify({
          sucess: false,
          invalid: true,
          message: "invalid input",
        })
      );
      return;
    }
  }

  let user = await Signup.findOne({ email });

  if (user) {
    res.json(
      JSON.stringify({ sucess: false, message: "User already exists" })
    );
    return;
  }

  if (type === "email") {
    const mailOptions = {
      from: "in@myty.in",
      to: email,
      subject: "OTP from LocalLearn",
      text: "Your OTP for LocalLerarn Registration is " + otp,
    };

    transport.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(1111, err);
      } else {
        res
          .status(200)
          .json(JSON.stringify({ message: "can't send otp", sucess: false }));
        return;
      }
    });
  } else {
    fetch(
      `https://www.fast2sms.com/dev/bulkV2?authorization=5hG1tbj0NCcrXgm83IDVMY7LvJ62TSsZ9xUoizHWRaPBwyOdFnYymP2dw549nTcRg86SiKfajZBze1kI&variables_values=${otp}&route=otp&numbers=${email}`
    );
  }
  let data = await Signup.create({
    name,
    email,
    otp,
    otp_expiry: new Date(Date.now() + 5 * 60 * 1000),
  });


  let result = await data.save();
  res.send(result);

});


//otpverify
router.post("/otp", (req, res,) => {
  if (!req.body.email) {
    res.json({ msg: "EMAIL_EMPTY" });
    return;
  }
  Signup.findOneAndUpdate(
    { email: req.body.email, otp: req.body.otp },
    { verified: true, updated_at: Date.now() },
    (err, result) => {
      if (err) {
        throw err;
      }
      // console.log(result);
      if (result == null) {
        res.status(200).json(JSON.stringify({ msg: "OTP_UNMATCHED" }));
      } else {
        res.status(200).json(JSON.stringify({ msg: "OTP_MATCHED" }));
        //Next Step is to set password. But that all wiil go to Users Collection.
        //The signup collection is only for doing the OTP/Verification purpose.
      }
    }
  );
});



// possword configer


router.post("/password", (req, res) => {
  const { name, email, password, username, mobile } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "FIELDS_ARE_EMPTY" });
  }
  //need to add the signup db check if its verified or not - work for @SahilSeli
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "USER_ALREADY_EXIST" });
    const newUser = new User({
      name,
      name,
      email,
      password,
      username,
      mobile,
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        // here id is creating the issues
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  _id: user.id,
                  name: user.name,
                  email: user.email,
                  username: user.username,
                  userlink: user.userlink,
                },
              });
            }
          );
        });
      });
    });
  });
});


// login user

router.post("/login", (req, res) => {
  // log the req
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "EMAIL_PASSWORD_EMPTY" });
  }
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "USER_DOES_NOT_EXIST" });

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "INVALID_PASSWORD" });

      jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          // console.log("login successful");
          res.json({
            token,
            user: user,
            // this is changed, user has access to all user info from db hashed passwords too.
          });
        }
      );
    });
  });
});


// forgot-password
router.post("/forgot-password", (req, res) => {
  const { email } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(400).send({ msg: "USER_DOES_NOT_EXIST" });
      } else {
        let options = {
          min: 100000,
          max: 999999,
          integer: true,
        };
        const otp = rn(options);

        // console.log("sending OTP: " + otp + " to " + req.body.email);

        // update the user with new otp
        Signup.findOneAndUpdate(
          { email: email },
          { otp: otp.toString() },
          (err, res) => { }
        );

        const mailOptions = {
          from: "in@myty.in",
          to: req.body.email,
          subject: "OTP",
          text: "Your OTP for password Recovery is " + otp,
        };

        transport.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.log(err);
          } else {
            // console.warn("checking", info);
          }
        });

        res.send({
          msg: "EMAIL_VERIFIED",
        });
      }
    })
    .catch((err) => {
      err.send({
        msg: "EMAIL_DOES_NOT_EXISTS",
      });
    });

  res.status(200);
});




//resend otp


router.post("/reset-otp", (req, res) => {
  const { email, otp } = req.body;

  Signup.findOne(
    { email: email, otp: otp },

    (err, result) => {
      if (err) throw err;

      if (result == null) {
        res.send({ msg: "OTP_UNMATCHED" });
      } else {
        res.send({ msg: "OTP_MATCHED" });
      }
    }
  );
});


// ressend pasword

router.post("/reset-password", (req, res) => {
  const { email, password } = req.body;
  // console.log(password);

  User.findOne({ email })
    .then((user) => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) throw err;
          user.password = hash;

          user.save().then(() => {
            res.send({
              msg: "PASSWORD_UPDATED",
            });
          });
        });
      });
    })
    .catch((err) => {
      res.send({});
    });
});


















module.exports = router;