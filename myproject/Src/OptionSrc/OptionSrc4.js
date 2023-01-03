import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import OptionSkils from '../../componets/OptionSkils';





export default function OptionSrc4() {
  const navigation = useNavigation();




  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#40E0D0', '#A9DBB8']}
          style={{ height: 60 }}></LinearGradient>

        <Text style={styles.rgtext}>Skills that I am good at</Text>


        <View style={styles.box}>


          <OptionSkils />






          <TouchableOpacity style={styles.btn}
            onPress={() => {
              navigation.navigate('WelcomeSrc')
            }}
          >
            <Text style={styles.btnsubmit}>NEXT</Text>
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
    borderWidth: 1,
    borderColor: '#40E0D0',
    alignSelf: 'center',
    width: '100%',
    height: 50,
    marginTop: 10
  },
  box: {
    display: 'flex',
    borderWidth: 2,
    borderColor: '#40E0D0',
    width: '70%',
    alignSelf: 'center',
    padding: 15,
    marginTop: 30,
    paddingBottom: 15,


  },
  btnsubmit: {
    color: '#40E0D0',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 12
  },
  bottamtext: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 180,

  }






});