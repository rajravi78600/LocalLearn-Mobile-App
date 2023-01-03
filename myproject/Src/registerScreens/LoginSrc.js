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
import { useForm, Controller } from 'react-hook-form';
import CustomInput from '../../componets/CustomInput';
import {
  userDataUpdate,
  locationUpdate,
  professionUpdate,
  addGoodSkill,
  addLearnSkill
} from "../../Redux/Store"

export default function LoginSrc() {
  // const navigation = useNavigation();
  const [loading, setLoading] = useState(false);


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onloginBtn = async data => {
    await fetch("http://doornextshop.com/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: loginId, password }),
    })
      .then((res) => res.json())
      .then((data) => JSON.parse(data))
      .then((data) => {
        if (data.sucess) {
          // navigate("/app/loginsucess");
          setSucess(true);
          setLoading(false);
          dispatch(
            userDataUpdate({
              email: data.user.email,
              name: data.user.name,
              username: data.user.username,
            })
          );
          dispatch(locationUpdate(data.user.location));
          dispatch(professionUpdate(data.user.profession));
          dispatch(addGoodSkill(data.user.goodSkills));
          dispatch(addLearnSkill(data.user.learnSkills));
        } else {
          alert(data.message);
          setLoading(false);
        }
      });


  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#40E0D0', '#A9DBB8']}
          style={styles.linearGradient}>
          <Text style={styles.title}> Log In</Text>
        </LinearGradient>

        <View style={{ flex: 2, backgroundColor: '#FFFFFF' }}>
          <View style={{ marginTop: 10 }}>
            <CustomInput
              name="username"
              placeholder="Username"
              control={control}
              rules={{ required: 'Username is required' }}
            />
          </View>

          <View style={{ marginTop: 10 }}>
            <CustomInput
              name="password"
              placeholder="Password"
              secureTextEntry
              control={control}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password should be minimum 8 characters long',
                },

              }}
            />

            <TouchableOpacity
              style={styles.inputSubmit}
              onPress={handleSubmit(onloginBtn)}>
              <Text style={styles.btnsubmit}>Next</Text>
            </TouchableOpacity>
          </View>




          <Text style={styles.bottamtext}>Powered by Doions Pvt Ltd</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: '700',
    color: '#FFFFFF',
    width: '50%',
    alignSelf: 'center',
    marginTop: 160,
    justifyContent: 'center',
    marginLeft: 50,
  },
  linearGradient: {
    width: '100%',
    height:220
  },

  inputSubmit: {
    width: '70%',
    height: 50,
    borderWidth: 3,
    borderColor: '#40E0D0',
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 25,
  },
  btnsubmit: {
    color: '#40E0D0',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 16,
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
