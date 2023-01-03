import { View, Text, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import socketService from './socketService'
import socketServcies from './socketService'


export default function TestPage() {
  const [message, setMessage] = useState('')
  const [data, setData] = useState([])






  useEffect(() => {
    socketService.initializeSocket()
  }, [])


  useEffect(() => {
    socketService.on('received_message', (msg) => {
      console.log("messsage reciveed in react app", msg)
      let cloneArry = [...data]
      setData(cloneArry.concat(msg))
    })
  })


  const sendMessage = () => {

    if (!!message) {
      socketServcies.emit('send_message', message)
      return;
    }
    alert("please enter your message")
  }




  return (
    <View>

      <TextInput
        placeholder='enter your qution'
        style={{ width: 300, height: 80 }}
        value={message}
        onChangeText={text => setMessage(text)}
      />

      <Button
        title='send'
        onPress={sendMessage}
      />


      <View>
        {data.map((val, i) => {
          return (
            <Text>{val}</Text>
          )
        })}
      </View>


    </View>
  )
} 1