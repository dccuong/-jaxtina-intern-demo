import React from 'react'
import { Text, View,Image } from 'react-native'
import FastImage from 'react-native-fast-image';

// type Props = {}

const DetailScreen = ({ route}: any) => {
  const { Id, name,avt,title } = route.params;
  console.log(Id, name,avt,title)
  return (
    <View style={{flex:1, alignItems:'center',}}>
      <Text style={{ color: "black",fontSize:30, fontFamily: "Dosis-Bold" }}>itemId: {JSON.stringify(Id)}</Text>
      <Text style={{ color: "black", fontFamily: "Dosis-Bold" }}>Name: {JSON.stringify(name)}</Text>
      <FastImage
      source={{
        uri:avt
      }}
      style={{width:90,height:100}}
      />
      <Text style={{ color: "black", fontFamily: "Dosis-Bold" }}>itemId: {JSON.stringify(avt)}</Text>
      <Text style={{ color: "black", fontFamily: "Dosis-Bold" }}>itemId: {JSON.stringify(title)}</Text>
      <Text style={{ color: "black",fontSize:30, fontFamily: "JosefinSans-ExtraLight" }}>DetailScreen</Text>
    </View>
  )
}

export default DetailScreen