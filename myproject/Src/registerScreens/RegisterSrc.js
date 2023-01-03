import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../componets/CustomInput';
import { useForm, Controller } from 'react-hook-form';
import {
  userDataUpdate,
  locationUpdate,
  professionUpdate,
  addGoodSkill,
  addLearnSkill
} from "../../Redux/Store"

export default function RegisterSrc() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onRegisterinBtn = () => {
    fetch('http://192.168.29.42:5000/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: 'ravi',
        email: 'rajravi786000@gmail.com',
      })

    })
      .then((response) => response.json())
      .then((json) => console.log(json));

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

          <View>
            <Text style={styles.rgtext}>To register , please sign up</Text>

            <View>
              <CustomInput
                name="username"
                placeholder="Enter your name"
                control={control}
                rules={{ required: 'username is required' }}
              />

              <CustomInput
                name="email"
                placeholder="Enter Email/Phone no."
                secureTextEntry
                control={control}
                rules={{
                  required: 'Enter Email/Phone no. is required',
                  // minLength: {
                  //   value: 8,
                  //   message: 'Password should be minimum 8characters long',
                  // },
                }}
              />

              <TouchableOpacity
                style={styles.inputSubmit}
                onPress={handleSubmit(onRegisterinBtn)}>
                <Text style={styles.btnsubmit}>Submit</Text>
              </TouchableOpacity>

            </View>


            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text style={styles.LoginText}> Already have an account ? :</Text>






              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LoginSrc');
                }}>
                <Text style={{ color: '#40E0D0', fontSize: 18, paddingTop: 2 }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>




          </View>




























          <Text style={styles.bottamtext}>Powered by Doions Pvt Ltd</Text>
        </View>


      </View>

    </SafeAreaView>




  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    width: '50%',
    alignSelf: 'center',
    marginTop: 140,
    justifyContent: 'center',
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
    marginTop: 20,
  },

  inputSubmit: {
    width: '70%',
    height: 50,
    borderWidth: 3,
    borderColor: '#40E0D0',
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 15,
  },
  btnsubmit: {
    color: '#40E0D0',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 17,
    fontWeight: '500',
    marginTop: 10,
  },

  bottamtext: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 180,
  },
});
