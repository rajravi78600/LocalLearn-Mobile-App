import React, { useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'// import LinearGradient
import StatusBar from '../../componets/StatusBar'
import { useNavigation } from '@react-navigation/native';
function SplashSrc() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Register')
    }, 3000);
  }, []);


  return (
    <LinearGradient
      colors={['#40E0D0', '#A9DBB8']}
      style={styles.linearGradient}
    >
      <Text style={styles.title} >Welcome to LOCALLEARN</Text>


    </LinearGradient>

  )
}

const styles = StyleSheet.create({

  linearGradient: {
    flex: 1,

  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#FFFFFF',
    width: '50%',
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 450


  },


})
export default SplashSrc;