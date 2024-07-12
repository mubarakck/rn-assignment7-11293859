import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.first}>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
first :{
alignContent: 'center',
justifyContent: 'center',
flex: 1,
},
})