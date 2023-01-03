import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import OTPInputView from '@twotalltotems/react-native-otp-input'

import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';



export default function OtpSrc() {
  const navigation = useNavigation();
  const [invalidCode, setInvalidCode] = useState(false);
  const [otp, setOtp] = useState();
  const [content, setContent] = useState("");
  const [sucess, setSucess] = useState(false);
  const [loading, setLoading] = useState(false);




  const email = useSelector((state) => state.userdata.email);




  const otpVerify = () => {

  }




  const resendOtpHandler = () => {

  }














  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>

        <LinearGradient
          colors={['#40E0D0', '#A9DBB8']}
          style={styles.linearGradient}
        >
          <Text style={styles.title}> Welcome  to LOCALLEARN</Text>
        </LinearGradient>

        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} >

          <Text style={styles.rgtext}>please enter the OTP we have sent on your registered </Text>
          <Text style={styles.rgtext2}>mobile/email</Text>




          <OTPInputView
            style={{ width: '80%', height: 65, alignSelf: 'center' }}
            pinCount={6}
            code={otp}
            onCodeChanged={setOtp}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            placeholderTextColor={'#0000'}

          // onCodeFilled={code => {
          //   console.log(`Code is ${code}, you are good to go!`)
          //   setInvalidCode(otp)
          // }}
          />



          {invalidCode && <Text style={styles.error}>{content}</Text>}



          <TouchableOpacity style={styles.inputSubmit}
            onPress={otpVerify}
          >
            <Text style={styles.btnsubmit}>Submit</Text>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={resendOtpHandler}
          >
            <Text style={styles.btnsubmit}>Resend OTP</Text>
          </TouchableOpacity>









          <Text style={styles.bottamtext}>Powered by Doions Pvt Ltd</Text>
        </View>


      </View>

    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    width: '50%',
    alignSelf: 'center',
    marginTop: 150,
    justifyContent: 'center'
  },
  linearGradient: {
    width: '100%',
    height: 220,
  },
  rgtext: {
    color: '#000000',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
    width: '63%'
  },
  rgtext2: {
    color: '#000000',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
    width: '63%',

  },
  input: {
    width: '60%',
    height: 40,
    borderWidth: 1,
    borderColor: '#A4A4A4',
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 15,
  },
  inputSubmit: {
    width: '60%',
    height: 50,
    borderWidth: 3,
    borderColor: '#40E0D0',
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10,
  },
  btnsubmit: {
    color: '#40E0D0',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10
  },
  bottamtext: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 160,
  },




  borderStyleBase: {
    width: 30,
    height: 20
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
    Color: "#00000",

  },

  underlineStyleBase: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    color: "black",
    fontWeight: '500',




  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",

  },
  error: {
    color: "red",
  },






})