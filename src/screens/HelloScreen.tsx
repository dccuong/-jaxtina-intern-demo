import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BComponent from '../component/Button';
import TextComponent from '../component/TextCpn';
import LottieView from 'lottie-react-native';
import assets from '../../assets/Andex';

type Props = {};

const HelloScreen = ({navigation}: any) => {
  const data = {
    title1: 'Phát triển Tiếng Anh Toàn Diện 4 kỹ năng',
    title2: 'NGHE - NÓI - ĐỌC - VIẾT',
    title3: 'Hãy bắt đầu',
    title4: 'Đã là người dùng Jaxtina rồi?',
  };
  return (
    <SafeAreaProvider style={styles.Screen}>
      <View style={styles.contain}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/Logo.png')}
        />
        <TextComponent
          title={data.title1}
          size={16}
          color="black"
          weight={500}
        />
        <TextComponent
          title={data.title2}
          size={20}
          color="#CD2027"
          weight={700}
          mt={12}
        />
      </View>
      {/* viewicon1 */}
      <View style={styles.imgg1}>
        <Image
          style={styles.iconn}
          source={require('../../assets/icon-1.png')}
        />
        <Image
          style={styles.iconn}
          source={require('../../assets/icon-2.png')}
        />
      </View>
{/* viewicon2 */}
      <View style={styles.imgg2}>
        <Image
          style={styles.iconn2}
          source={require('../../assets/icon-1.png')}
        />
        <LottieView
          autoPlay
          loop
          source={assets.lottieFiles.tcc}
          style={{width: 296, height: 296, paddingLeft: 50}}
        />
        <Image
          style={styles.iconn3}
          source={require('../../assets/icon-2.png')}
        />
      </View>
      {/* btn___ */}
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <BComponent
          bgCl={'#CD2027'}
          title={data.title3}
          color="#fff"
          size={17}
          weight={600}
        />
      </TouchableOpacity>
      {/* title */}
      <View
        style={{marginTop: 14, justifyContent: 'center', flexDirection: 'row'}}>
        <TextComponent
          title={data.title4}
          color="black"
          size={15}
          weight={400}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <TextComponent
            title={' Đăng nhập'}
            color="blue"
            size={15}
            weight={700}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  Screen: {
    marginTop: 34,
    flex: 1,
  },
  contain: {alignItems: 'center'},

  tinyLogo: {
    width: 99,
    height: 66,
    marginBottom: 23,
  },
  iconn: {
    width: 104,
    height: 104,
    marginLeft: 15,
    marginRight: 15,
  },
  iconn2: {
    width: 104,
    height: 104,
    marginTop: 5,
    marginLeft: 27,
  },
  iconn3: {
    width: 104,
    height: 104,
    marginTop: 5,
    marginRight: 27,
  },
  imgg1: {
    paddingTop: 30,
    flexDirection: 'row',
    height: 104,
    justifyContent: 'center',
  },
  imgg2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 296,
  },
});
export default HelloScreen;
