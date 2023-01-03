import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import React, { useCallback, useState, useLayoutEffect, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient'
import { GiftedChat } from 'react-native-gifted-chat';


export default function BotHomeSrc() {







  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#40E0D0', '#A9DBB8']}
          style={{ flex: 1 }}
        >


          <View style={styles.Header}>
            <View style={{ flexDirection: 'row', marginHorizontal: 100 }}>
              <Image
                style={{ width: 40, height: 40, marginTop: 6 }}
                source={require('../../assets/1.png')}
              />
              <Text
                style={{
                  color: '#FFFFFF',
                  marginLeft: 10,
                  marginTop: 8,
                  fontSize: 25,
                  fontWeight: 'bold',
                }}>
                Locallearn
              </Text>
            </View>

            <View>
              <TouchableOpacity >
                <Image
                  style={{ width: 40, height: 40, marginTop: 8 }}
                  source={require('../../assets/menu.png')}
                />
              </TouchableOpacity>
            </View>
          </View>





          <View style={styles.endHEDER} >
            <View>

            </View>
          </View>







        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Header: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#00072D',
  },
  endHEDER: {
    backgroundColor: '#00072D',
    width: '100%',
    height: 90,
  },
  chatbotinbox: {
    width: '93%',
    height: 40,
    backgroundColor: '#C4C5CB',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 30


  }
})

