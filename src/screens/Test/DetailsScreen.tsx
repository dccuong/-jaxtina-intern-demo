import React, { useState } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, TextInput, } from 'react-native'
import { useForm, SubmitHandler, Controller,SubmitErrorHandler } from "react-hook-form"
import FastImage from 'react-native-fast-image';

export default function DetailsScreen({ navigation }: any) {
  const [show, hiden] = useState(false)
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const onError: SubmitErrorHandler<any> = (errors, e) => {
    return console.log(errors)
  }

  return (
    <View style={{ flex: 1 }}>
      {/*  */}


      <ImageBackground
        source={{ uri: 'https://images.wallpapersden.com/image/download/4k-a-different-world_bWVqaG6UmZqaraWkpJRmbmdlrWZlbWU.jpg' }}
        style={{ flex: 1, alignItems: "center" }}
      >
        <View style={{ height: "10%", flexDirection: "row", justifyContent: "space-between", margin: 10, width: "80%" }}>
          <Image
            source={{
              uri: "https://cdna.artstation.com/p/assets/images/images/017/700/230/large/alfredo-baro-angulo-ref.jpg?1557011944",
              cache: 'only-if-cached' 
            }}
            
            style={{ width: 100, height: 40 }}

          />
          <Image
            source={{
              uri: "https://picsum.photos/200/300"
            }}
            style={{ width: 100, height: 40 }}

          />

        </View>
        <View style={{ height: "75%", justifyContent: "center", alignItems: "center", width: "100%" }}>

          {/* <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            rules={{ required: true }}
          /> */}
          <TextInput style={styles.input}
            placeholder="Pass"
            secureTextEntry={true}
          />
          {/* <View style={{ position: "relative" }}>
          <Button onPress={() => { navigation.navigate("man2") }}
            title="Go screen 2"
            color="#841584"
          ></Button>
        </View> */}

          <TouchableOpacity style={styles.wap} onPress={() => { navigation.navigate("MainHome") }}>
            <Text style={styles.textBotton}> Go screen</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: "10%", }}>
          {/* <Text>sssss</Text> */}
        </View>
      </ImageBackground>



    </View>
  )
}
const styles = StyleSheet.create({
  textBotton: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    margin: 10,
  },
  wap: {
    borderRadius: 5,
    backgroundColor: "#FF2272",
    marginTop: 10
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
    width: "80%"
  }
})