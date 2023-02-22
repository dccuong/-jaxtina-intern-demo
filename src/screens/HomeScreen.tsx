import React from 'react'
import { View, StyleSheet, FlatList, Image ,ScrollView} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import TextComponent from '../component/TextCpn'

type Props = {}

export const HomeScreen = (props: Props) => {
    const DATA = [
        {
            id: '1',
            img:require('../../assets/gra0.png'),
        },
        {
            id: '2',
            img:require('../../assets/gra1.png'),
        },
        {
            id: '3',
            img:require('../../assets/gra2.png'),
        },
    ];

    return (
        <SafeAreaProvider style={styles.screen} >
            
            <View style={{ alignItems: "flex-start",width:343 }}>
                <TextComponent title='Hiiiiiiiiii' color={"#2E3192"} size={24} weight={700} />
                <TextComponent title='Nothing is more important than practice!' color={"#2E3192"} size={16} weight={400} />
            </View>
            <View>
                <FlatList
                    data={DATA}
                    renderItem={({ item }:any) => (
                        <View style={{alignItems:"center", marginTop:12 }}>
                            <Image 
                            source={item.img}
                            style={{width:343,borderRadius:20, height:170}}
                            />
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaProvider>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 16,
        alignItems:'center'
    }
})