import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { SelectList } from 'react-native-dropdown-select-list'
export default function OptionSrc1() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(false);
  console.log(selected)

const data =  [
    ("student"),
    ("educator"),
    ("medical professional"),
    ("entrepreneur"),
    ("Goverment Servant"),
    ("Civil Servant"),
    ("Law enforcement officer"),
    ("artist"),
    ("designer"),
    ("management"),
    ("hotel management"),
    ("legal professional"),
    ("finance professional"),
    ("defence personale"),
    ("social worker"),
   ( "fashion and styling"),
    ("software professional"),
    ("engineering"),
    ("merchant navy"),
  ]



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#40E0D0', '#A9DBB8']}
          style={{ height: 60 }}></LinearGradient>

        <Text style={styles.rgtext}>I am a/an </Text>


        <View style={styles.box}>
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
            boxStyles={{ alignSelf: 'center', width: '100%', borderColor: '#40E0D0', marginTop: 20 }}
            dropdownStyles={{ borderColor: '#40E0D0' }}
          />
          <TouchableOpacity style={styles.btn}
            onPress={() => {
              navigation.navigate('OptionSrc2')
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
    marginTop: 70
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
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10
  },
  bottamtext: {

    color: '#000000',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 180,

  }






});
