import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, } from 'react-native'
import { create } from 'react-test-renderer'
export default function Test1(props: any) {
  const navMenu = [
    {
      name: "home2",
      screen: "screen2"
    },
    {
      name: "home2",
      screen: "screen2"
    },
    {
      name: "home2",
      screen: "screen2"
    }
  ]
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', flex: 1, justifyContent: "space-around", marginTop: 20,}}>
        {navMenu.map((item,index)=>(
          <TouchableOpacity style={styles.wapNav} key={index}>
          <Text style={{ color: "red", fontWeight: "600" }} >{item.name}</Text>
        </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wapNav: { borderWidth: 2, borderColor: "red", height: 30, padding: 4, borderRadius: 5 }

})