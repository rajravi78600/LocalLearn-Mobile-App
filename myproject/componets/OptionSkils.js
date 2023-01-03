import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function OptionSkils() {

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




  return (
    <View>

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
                margin: 10,
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




    </View>
  )
}