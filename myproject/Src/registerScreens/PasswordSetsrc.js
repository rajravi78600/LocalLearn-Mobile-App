import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import StatusBar from '../../componets/StatusBar';
import { useNavigation } from '@react-navigation/native';
export default function PasswordSetsrc() {
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#40E0D0', '#A9DBB8']}
          style={{ height: 50 }}></LinearGradient>
        <View style={{ flex: 2, backgroundColor: '#FFFFFF' }}>
          <Text style={styles.rgtext}>To register , please sign up</Text>

          <View>
            <TextInput
              autoCapitalize={'none'}
              placeholder={'User name'}
              style={styles.input}
            />
            <TextInput
              autoCapitalize={'none'}
              placeholder={'Password'}
              style={styles.input}
            />
            <TextInput
              autoCapitalize={'none'}
              placeholder={'Confirm Password'}
              style={styles.input}
            />
            <Text style={styles.passtext}>
              Password Strength : <Text style={{ color: '#058702' }}>Strong</Text>{' '}
            </Text>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.label}>
                By creating an account you are agreeing to our Terms and
                Conditions and Privacy Policy
              </Text>
            </View>

            <TouchableOpacity style={styles.inputSubmit}
              onPress={() => {
                navigation.navigate('ImageSrc')
              }}
            >
              <Text style={styles.btnsubmit}>Submit</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
            <Text style={styles.LoginText}> Already have an account ? :</Text>

            <TouchableOpacity>
              <Text style={{ color: '#40E0D0', fontSize: 18 }}> Login</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.bottamtext}>Powered by Doions Pvt Ltd</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    flex: 1,
  },
  rgtext: {
    color: '#000000',
    alignSelf: 'center',
    fontSize: 23,
    fontWeight: '500',
    marginTop: 18,
  },
  input: {
    width: '70%',
    height: 40,
    borderWidth: 1,
    borderColor: '#A4A4A4',
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 15,
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
  passtext: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: '#605C5C',
    marginRight: 35,
    marginTop: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '70%',
    marginBottom: 20,
    marginTop: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    fontSize: 12,
    margin: 4,
    fontWeight: '400',
    color: '#000000',
  },
  LoginText: {
    color: '#000000',
    fontWeight: '400',
    fontSize: 17,
    alignSelf: 'center',
  },
});
