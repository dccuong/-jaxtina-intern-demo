import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import TextComponent from './TextCpn'
type Props = {
title?:string,
color?:any,
size?:any,
weight?:any,
mb?:any,
mt?:any,
bgCl?:any,
btHeight?:any,
onPress?:void
widthh?:any
pt?:any
pb?:any
nav?:any
}

const BComponent = (props: Props,{navigation}:any) => {
    return (
        <View 
        style={{width:props.widthh,marginBottom:props.mb, marginTop:props.mt,backgroundColor:props.bgCl,height:48, margin:10, borderRadius:12,alignItems:"center", justifyContent:'center'}}
      
        >
          <TextComponent title={`${props.title}`} weight={props.weight} color={props.color} mt={props.mt} mb={props.mb}  />
        </View>

    )
}

export default BComponent