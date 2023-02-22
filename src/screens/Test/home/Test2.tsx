import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Button, } from 'react-native'
import { create } from 'react-test-renderer'
export default function Test2({navigation }: any,) {
  console.log("sssssssss")
  const navMenu = [
    {
      name: "home1",
      screen: "screen1"
    },
    {
      name: "home1",
      screen: "screen1"
    },
    {
      name: "home1",
      screen: "screen1"
    }
  ]
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', flex: 1, justifyContent: "space-around", marginTop: 20, }}>
        {navMenu.map((item, index) => (
          <TouchableOpacity style={styles.wapNav} key={index}>
            <Text style={{ color: "red", fontWeight: "600" }} >{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button
        title="goback"
        onPress={() => {
          navigation.goBack()
        }
        }
      />
      <Button
        title="Cancel"
        onPress={() => {
          navigation.reset({
            routes: [{ name: 'man01' }]
          })
        }
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wapNav: { borderWidth: 1, borderColor: "red", height: 30, padding: 4, borderRadius: 5 }

})