import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';




export default function WelcomeSrc() {
  const [selected, setSelected] = useState(false);
  const navigation = useNavigation();


  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('BotHomeSrc')
  //   }, 3000);
  // }, []);







  const data = [
    { key: '1', value: 'Mobiles' },
    { key: '2', value: 'Appliances' },
    { key: '3', value: 'Cameras' },

  ]
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#40E0D0', '#A9DBB8']}
          style={{ height: 60 }}></LinearGradient>

        <Text style={styles.rgtext}>Welcome to Local learn</Text>


        <View>


          <Text style={{ alignSelf: 'center' }}>image</Text>




          <Text style={styles.text}>Hey! there I am BOT </Text>
          <Text style={styles.text}>Nice to meet you.</Text>






          <TouchableOpacity style={styles.btn}
            onPress={() => navigation.navigate('BotHomeSrc')}
          >
            <Text style={styles.btnsubmit}>Let's chat</Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.bottamtext}>Powered by Doions Pvt Ltd</Text>
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
    marginTop: 70,
  },
  btn: {
    borderWidth: 2,
    borderColor: '#40E0D0',
    alignSelf: 'center',
    width: '70%',
    height: 50,
    marginTop: 70,
    borderRadius: 5
  },
  box: {
    display: 'flex',
    borderWidth: 1,
    borderColor: '#40E0D0',
    width: '70%',
    alignSelf: 'center',
    padding: 15,
    marginTop: 50,
    paddingBottom: 15,


  },
  btnsubmit: {
    color: '#40E0D0',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 17,
    fontWeight: '500',
    marginTop: 10
  },
  bottamtext: {

    color: '#000000',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 180,

  },
  text: {
    alignSelf: 'center',
    color: '#000000',
    fontSize: 18,
    padding: 10
  }






});