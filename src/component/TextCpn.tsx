import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
type Props = {
title?:string,
color?:any,
size?:any,
weight:any
mb?:any
mt?:any
fontFml?:any

}

const TextComponent = (props: Props) => {
    return (
        <View style={{marginBottom:props.mb, marginTop:props.mt}}>
            <Text style={{fontSize:props.size,color:props.color,fontWeight:props.weight,textAlign:'center',fontFamily:`${!props.fontFml?"Inter-Medium" : props.fontFml }`}}>{props.title}</Text>
        </View>

    )
}

export default TextComponent