const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
var cors = require("cors");
const port = process.env.PORT || 4000;
var bodyParser = require('body-parser')
const app = express();
const jwt = require("jsonwebtoken");
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server)




mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_DB_URI, { useNewUrlParser: true })
  .then((e) => console.log(`Connected to mongoDb:${e.connection.host}`))
  .catch((e) => console.log(e));






app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});




app.use('/', require("./routers/user"))


io.on('connection', (socket) => {
  console.log('a user connected');


  socket.on('send_message', (data) => {
    console.log("received message in server side", data)
    io.emit('received_message', data)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

});









server.listen(port, () => {
  console.log(`Port is running at http://localhost:${port}`);
});