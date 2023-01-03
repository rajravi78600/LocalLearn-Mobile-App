import { View, Text, SafeAreaView, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={{ flex: 1, backgroundColor: "#ffffff", }}>

        <View>

        </View>
        <View style={{ height: 1, backgroundColor: '#000000', marginTop: 90 }}></View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
          <Image
            source={require("../../assets/1.png")}
            style={{ width: 120, height: 120, tintColor: "#000000" }}
          />

          <View style={{ marginRight: 40 }}>
            <Text style={{ fontWeight: 'bold', color: "#000000", fontSize: 20, marginTop: 20, marginRight: 20 }}>Madelyan press</Text>
            <Text style={{ color: "#000000", marginTop: 15 }}>can teech</Text>
            <Text style={{ color: "#000000", marginTop: 5 }}>Bhopal</Text>
          </View>
        </View>


        <View>
          <Text style={{ fontWeight: 'bold', color: "#000000", fontSize: 20, marginTop: 20, marginLeft: 20 }} >Skills Know</Text>


          <View style={{ marginLeft: 20, display: 'flex', backgroundColor: '#40E0D0', }}>
            <Text style={{ fontSize: 17, fontWeight: '400', padding: 2, alignSelf: 'center', color: "#000000", }}>Basic codding</Text>
          </View>




        </View>



        <View>
          <Text style={{ fontWeight: 'bold', color: "#000000", fontSize: 20, marginTop: 20, marginLeft: 20 }} >Skills want to learn</Text>


          <View style={{
            marginLeft: 20, display: 'flex', backgroundColor: '#40E0D0',
          }}>
            <Text style={{ fontSize: 17, fontWeight: '400', padding: 2, alignSelf: 'center', color: "#000000", }}>  Singing</Text>
          </View>

        </View>



        <TouchableOpacity style={{ borderWidth: 1, borderColor: '#40E0D0' ,alignSelf:'center' , marginTop:70 , borderRadius:5 }} >
          <Text style={{fontSize:20,fontWeight:'bold', color:"#40E0D0" , paddingTop:15, paddingBottom:15, paddingHorizontal:90 , }} >Add co-learner</Text>
        </TouchableOpacity>





      </View>
    </SafeAreaView>
  )
}