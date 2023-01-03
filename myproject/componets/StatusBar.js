import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

export default function StatusBar() {
  return (
    <LinearGradient
      colors={['#40E0D0', '#A9DBB8']}
      style={styles.linearGradient}
    >
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,

  },
})