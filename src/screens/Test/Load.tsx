import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'


const Load = ({ navigation }: any) => {

    // useEffect(()=>{const loadding=async()=>{
    //     await FastImage.preload([
    //        {
    //            uri: `https://images.wallpapersden.com/image/download/4k-a-different-world_bWVqaG6UmZqaraWkpJRmbmdlrWZlbWU.jpg`,
    //            headers: { Authorization: 'someAuthToken' },
    //        },])

    //        navigation.navigate("man01")
    //    }
    //    loadding()},[])
    // const a
    useEffect(() => {
        const a = async () => {
            await Image.prefetch("https://cdna.artstation.com/p/assets/images/images/017/700/230/large/alfredo-baro-angulo-ref.jpg?1557011944");
            console.log("napj xongggggg")
            setTimeout(() => { navigation.navigate("man01") }, 1000)
        }
        a()
    }, [])
    return (
        <View><Text style={{ color: "red" }}>{"load"}</Text>
            <TouchableOpacity style={{}} onPress={() => { navigation.navigate("man01") }} >
                <Text style={{ color: "red" }} > Go screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Load