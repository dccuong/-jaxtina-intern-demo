import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import { Image } from 'react-native'


export const tabBarComponent = ({ state, descriptors, navigation }:any) => {
  return (
    <View style={{ flexDirection: 'row',backgroundColor:"#fff"}}>
         {state.routes.map((route:any, index:any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <View style={{alignItems:"center",margin:12}}>
                <Image
                source={label==="Sách"?require("../../assets/nav1.png") : label==="Phát Âm"?require("../../assets/nav2.png") : label==="Khóa học"?require("../../assets/nav3.png"): label=="Tiện ích"? require("../../assets/nav4.png"): require("../../assets/nav5.png") }
                style={{tintColor:isFocused ? 'red' : 'gray', width:19, height:20}}
                />
            <Text style={{ color: isFocused ? 'red' : 'gray', fontSize:12 ,marginTop:6  }}>
              {label}
            </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}