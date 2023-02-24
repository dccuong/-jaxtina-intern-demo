import React from 'react';
import {
  StyleSheet,
  Switch,
  View,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BComponent from '../component/Button';
import TextComponent from '../component/TextCpn';
import LottieView from 'lottie-react-native';
import assets from '../../assets/Andex';
import useTheme from '../useTheme';
import {useTranslation} from 'react-i18next';

const HelloScreen = ({navigation}: any) => {
  const theme = useTheme();
  const {t, i18n} = useTranslation();
 
  return (
    <SafeAreaProvider
      style={[styles.Screen, {backgroundColor: theme.colors.BACKGROUND}]}>
      <ScrollView>
        <View style={styles.contain}>
          <Button
            onPress={() => i18n.changeLanguage(i18n.language=="en"?"vn":i18n.language=="vn"?"en":"en")}
            title={t('switchLanguage', {lng: i18n.language=="en"?"vn":i18n.language=="vn"?"en":"en"})}
          />
          <Switch
            onValueChange={theme.toggleTheme}
            value={theme.isLightTheme}
          />
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/Logo.png')}
          />
          <TextComponent
            title={"title1"}
            size={16}
            color={theme.colors.TEXT}
            weight={500}
          />
          <TextComponent
            title={"title2"}
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
            style={{height: 296}}
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
            title={"title3"}
            color="#fff"
            size={17}
            weight={600}
          />
        </TouchableOpacity>

        {/* title */}
        <View
          style={{
            marginTop: 14,
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <TextComponent
            title={"title4"}
            color={theme.colors.TEXT}
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
      </ScrollView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  Screen: {
    paddingTop: 34,
    flex: 1,
    justifyContent: 'center',
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
    marginLeft: 6,
    marginRight: 6,
  },
  iconn2: {
    width: 104,
    height: 104,
    marginTop: 0,
    marginLeft: 27,
  },
  iconn3: {
    width: 104,
    height: 104,
    marginTop: 0,
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
    justifyContent: 'center',
  },
});
export default HelloScreen;
