import React, { useState, useEffect } from 'react';
import { Chip } from 'react-native-paper';
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Chips from '../../componets/Chips';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { locationUpdate } from '../../Redux/Store';

import { Searchbar } from 'react-native-paper';

export default function OptionSrc3() {
  // const navigation = useNavigation();
  // const dispatch = useDispatch()
  // const name = useSelector(state => state.userdata.names)
  // console.log(name)
  // dispatch(locationUpdate({ location: "jabalpur" }))
  // const loc = useSelector(state => state.userdata.location)
  // console.log(loc)

  const Data = [
    {
      id: 1,
      sub: "content writing",
      selected: false
    },
    {
      id: 2,
      sub: "Public speaking",
      selected: false
    },
    {
      id: 3,
      sub: "Web development",
      selected: false
    },
    {
      id: 4,
      sub: "UI/UX design",
      selected: false
    },
    {
      id: 5,
      sub: "Photography",
      selected: false
    },
    {
      id: 6,
      sub: "singing",
      selected: false
    },
    {
      id: 7,
      sub: "Digital marketing",
      selected: false
    },
    {

      id: 8,
      sub: "Entrepreneurship",
      selected: false
    },
    {
      id: 9,
      sub: "Data Science",
      selected: false
    },
    {
      id: 10,
      sub: "Banking",
      selected: false
    },
    {
      id: 11,
      sub: "Korean language",
      selected: false
    },
    {
      id: 12,
      sub: "Makeup",
      selected: false
    },
    {
      id: 13,
      sub: "Investment",
      selected: false
    },


  ]
  const [select, setSelect] = useState(Data)
  console.log("selectedItem", select)

  const [skill, setSkill] = useState('')



  const onSelect = (item) => {
    const newItem = select.map((val) => {
      if (val.id === item.id) {
        return { ...val, selected: !val.selected }
      } else {
        return val;
      }


    })
    setSelect(newItem)

  }

  addskilhendler = () => {
    const data = { skill }
    console.log(skill)
    setSelect((is) => [...is, data])
    setSkill("")
  }











  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#40E0D0', '#A9DBB8']}
          style={{ height: 60 }}></LinearGradient>

        <Text style={styles.rgtext}>Skills that I want to learn</Text>


        <View style={styles.box} >


          <TextInput
            placeholder='Enter your skills...'
            style={styles.TextInput}
            value={skill}
            onChangeText={(text) => setSkill(text)}
          />
          <TouchableOpacity onPress={addskilhendler}
            style={styles.Addbtn}
          >
            <Text>Add</Text>
          </TouchableOpacity>

          <View style={{ marginTop: -200 }}>
            {
              select.map((item, index) => (
                <Text style={styles.text}>{item.skill}</Text>
              ))
            }
          </View>


          <FlatList
            data={select}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {

              return (
                <TouchableOpacity
                  style={{
                    width: '40%',
                    height: 30,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: "#40E0D0",
                    margin: 4,
                    backgroundColor: item.selected ? '#40E0D0' : '#ffffff',
                    alignSelf: 'center',
                    padding: 4,


                  }}
                  onPress={() => {
                    onSelect(item);
                  }}
                >
                  <Text style={{
                    fontSize: 15,
                    color: '#000000'
                  }}>{item.sub}</Text>
                </TouchableOpacity>
              )
            }}
          />

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
    marginTop: 30,
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

  },
  TextInput: {
    height: 35,
    borderWidth: 1,
    padding: 5,
    alignSelf: 'center',
    width: '100%',
    borderColor: "#BBBBBB",
    marginBottom: 10

  },
  Addbtn: {
    alignSelf: 'flex-end',
    marginTop: -40,
    marginRight: 15,
    borderWidth: 1,
    padding: 3

  }

});
