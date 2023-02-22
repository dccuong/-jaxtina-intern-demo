
import React, { useEffect, useState, useRef, } from 'react'
import { Dimensions } from 'react-native';
import { Modalize } from 'react-native-modalize';
import Modal from 'react-native-modal';
import axios from 'axios'
// import WebView from 'react-native-webview';
import {
  View, Button, TouchableOpacity, Text, Image, SafeAreaView,
  ScrollView, ActivityIndicator, FlatList
} from 'react-native'
import Test2 from './Test2';
import FastImage from 'react-native-fast-image';



export default function HomeScreen({ navigation }: any, { open, onClose }: any) {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [image, setImage] = useState<any[]>([])
  let [response, setResponse] = useState<any[]>([]);
  var responses = useRef<any[]>([])


  const modalizeRef = useRef<Modalize>(null);
  console.log(responses.current.length)
  console.log(responses)
  useEffect(() => {
    // if (responses.current.length == 0) {
    //   // fetch("https://62f45032535c0c50e75a944e.mockapi.io/portfolio")
    //   //   .then(res => res.json())
    //   //   .then(
    //   //     (result) => {
    //   //       setIsLoading(false);
    //   //       setResponse(result);
    //   //       responses = result
    //   //       console.log(responses, "ssssssssssss")
    //   //       result.map(async (item: any) => {
    //   //         await FastImage.preload([
    //   //           {
    //   //             uri: `${item.avatar}`,
    //   //             headers: { Authorization: 'someAuthToken' },
    //   //           },

    //   //         ])
    //   //         return <Text>{`loaddddddd`}</Text>
    //   //       })
    //   //     },
    //   //     (error) => {
    //   //       setIsLoading(false);
    //   //       setError(error);
    //   //     }
    //   //   )
    // }
    // else {
    //   setIsLoading(false);
    //   setResponse(responses.current);
    // }
    const callApi = async () => {
      const getData = await axios.get("https://62f45032535c0c50e75a944e.mockapi.io/portfolio")
      const check = () => {
        if (getData.data.length != 0) {
          setIsLoading(false);
          setResponse(getData.data);
          // getData.data.map((item: any) => {
          //   FastImage.preload([
          //     {
          //       uri: `${item.avatar}`,
          //       headers: { Authorization: 'someAuthToken' },
          //     },
          //   ])
          // })
        }

      }
      await check()
    }
    callApi()
  }, []);
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text>{error}</Text>
    }

    console.log(response);
    return (<ScrollView >
      <TouchableOpacity onPress={onOpen}>
        <Text>{"Click"}</Text>
      </TouchableOpacity>
      <Modalize ref={modalizeRef}><Test2 /></Modalize>

      {/* ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}
      <Button title="Show modal" onPress={toggleModal} />
      <Modal isVisible={isModalVisible} animationInTiming={200}>
        <View style={{ height: 300, backgroundColor: "#fff" }}>
          <Text>{'ssssssss'}</Text>
          <Button title="Show modal" onPress={toggleModal} />
        </View>
      </Modal>
      <View style={{ flex: 1, flexWrap: "wrap", flexDirection: 'row', justifyContent: 'space-between', marginLeft: "5%", marginRight: "5%" }}>
        {response.map((chirdItem: any, index: any) => (
          <TouchableOpacity key={index} style={{ alignItems: 'center', width: "48%", marginTop: 10 }}
            onPress={() => {
              navigation.navigate('DetailScreen', {
                Id: chirdItem.id,
                name: chirdItem.name,
                title: chirdItem.title,
                avt: chirdItem.avatar
              });
            }}>
            <Text style={{ color: "black" }}>{chirdItem.name}</Text>

            <Image
              style={{ width: "100%", height: 90 }}
              source={{
                uri: `${chirdItem.avatar}`,
                headers: { Authorization: 'someAuthToken' },

              }
              }
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>
        ))}
        <Text style={{ color: "black" }}></Text>
      </View>
    </ScrollView>)
  };
  return (
    <SafeAreaView >
      {getContent()}
      {/* <View>
   <FastImage
              style={{ width: "100%", height: 90 }}
              source={{
                uri: `https://images.wallpapersden.com/image/download/4k-a-different-world_bWVqaG6UmZqaraWkpJRmbmdlrWZlbWU.jpg`,
                headers: { Authorization: 'someAuthToken' },
                priority: FastImage.priority.normal,
                cache: FastImage.cacheControl.cacheOnly,
                
              }
              }
              resizeMode={FastImage.resizeMode.contain}
              
            />
   </View> */}
    </SafeAreaView>
  )
}

