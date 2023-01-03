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
import { useState, useEffect } from 'react';
import CheckBox from '@react-native-community/checkbox';
import StatusBar from '../../componets/StatusBar';
import { useNavigation } from '@react-navigation/native';

export default function ImageSrc() {
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OptionSrc1')
    }, 5000);
  }, []);







  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#40E0D0', '#A9DBB8']}
          style={{ height: 60 }}></LinearGradient>
        <View style={{ flex: 2, backgroundColor: '#FFFFFF' }}>
          <Text style={styles.rgtext}>Sign up successful!</Text>

          <View>
            <Text style={styles.bottamtextImg}>You will be redirected to set up your profile in next step.</Text>
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
    fontSize: 20,
    fontWeight: '500',
    marginTop: 100,
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
  bottamtextImg: {
    color: '#000000',
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 180,
    width: '60%'
  }
});
