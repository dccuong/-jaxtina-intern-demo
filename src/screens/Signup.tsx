import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View
} from 'react-native';
import BComponent from '../component/Button';
import TextComponent from '../component/TextCpn';
import { scale } from '../scaling-utils';
import useTheme from '../useTheme';

export const Signup = ({ navigation }: any) => {
  const { width } = useWindowDimensions();
  const theme = useTheme();
  // console.log(width,"signup")
  console.log('signUp');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: ``,
      Email: '',
      PNumber: ``,
      Pass: '',
      Datee: '',
    },
  });
  const {t, i18n} = useTranslation();
  const onSubmit = (data: any) => {
    console.log(data, 'log1');
    navigation.navigate('Login');
  };

 
  return (
    <View style={[styles.Screen, { backgroundColor: theme.colors.BACKGROUND }]}>
      <ScrollView>
        <View
          style={{
            height: 45,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../../assets/arrow-left.png')}
              style={{ width: 50, height: 45, marginTop: 10 }}
            />
          </TouchableOpacity>
          <TextComponent
            title={"s2title1"}
            color={theme.colors.TEXT}
            size={16}
            weight={600}
          />
          <Text style={{ width: 50 }}>.</Text>
        </View>

        <View style={{ alignItems: 'center', margin: 16 }}>
          <Image
            source={require('../../assets/Logo.png')}
            style={{ width: 98, height: 67, marginBottom: 23 }}
          />
          <TextComponent
            mb={12}
            title={"s2title2"}
            size={15}
            weight={400}
            color={theme.colors.TEXT}
          />
          {/* ///////////////////////////////////////// */}
          <View style={[styles.inputt, { width: scale(343) }]}>
            <Image
              source={require('../../assets/in1.png')}
              style={styles.iconn}
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholderTextColor={'#868E96'}
                  placeholder={`${i18n.t("ip1")}`}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="Name"
              rules={{ required: true }}
            />
            {errors.Name && (
              <Text style={{ color: 'red' }}>This is required.</Text>
            )}
          </View>
          <View style={[styles.inputt, { width: scale(343) }]}>
            <Image
              source={require('../../assets/in2.png')}
              style={styles.iconn}
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholderTextColor={'#868E96'}
                  placeholder={`${i18n.t("ip2")}`}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="Email"
              rules={{ required: true }}
            />
            {errors.Email && (
              <Text style={{ color: 'red' }}>This is required.</Text>
            )}
          </View>
          <View style={[styles.inputt, { width: scale(343) }]}>
            <Image
              source={require('../../assets/in3.png')}
              style={styles.iconn}
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholderTextColor={'#868E96'}
                  placeholder={`${i18n.t("ip3")}`}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="PNumber"
              rules={{ required: true }}
            />
            {errors.PNumber && (
              <Text style={{ color: 'red' }}>This is required.</Text>
            )}
          </View>

          <View style={[styles.inputt, { width: scale(343) }]}>
            <Image
              source={require('../../assets/in5.png')}
              style={styles.iconn}
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholderTextColor={'#868E96'}
                  placeholder={`${i18n.t("ip4")}`}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="Pass"
              rules={{ required: true }}
            />
            {errors.Pass && (
              <Text style={{ color: 'red' }}>This is required.</Text>
            )}
          </View>
          <View style={[styles.inputt, { width: scale(343) }]}>
            <Image
              source={require('../../assets/in4.png')}
              style={styles.iconn}
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholderTextColor={'#868E96'}
                  placeholder={`${i18n.t("ip5")}`}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="Datee"
              rules={{ required: true }}
            />
            {errors.Datee && (
              <Text style={{ color: 'red' }}>This is required.</Text>
            )}
          </View>
        </View>
        {/* btn_1 */}
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={handleSubmit(onSubmit)}>
          <BComponent
            bgCl={'#CD2027'}
            title={"btn"}
            color="#fff"
            size={17}
            weight={600}
            widthh={scale(343)}
          />
        </TouchableOpacity>

        {/* hoacwj */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              borderWidth: 1,
              width: scale(112),
              borderColor: '#C5CEE0',
              marginRight: 8,
            }}></View>
          <TextComponent
            title="Hoặc"
            color={'#495057'}
            size={15}
            weight={400}
          />
          <View
            style={{
              borderWidth: 1,
              width: scale(112),
              borderColor: '#C5CEE0',
              marginLeft: 8,
            }}></View>
        </View>
        {/* btn_2 */}
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <BComponent
            bgCl={'#1877F2'}
            title={"btn2"}
            color="#fff"
            size={17}
            weight={600}
            widthh={scale(343)}
          />
        </TouchableOpacity>
        {/*  */}
        <View
          style={{
            marginTop: 14,
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <TextComponent
            title={"s2title3"}
            color="black"
            size={15}
            weight={400}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <TextComponent
              title={' Đăng nhập'}
              color="blue"
              size={15}
              weight={700}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    paddingTop: 14,
    paddingLeft: 16,
    paddingRight: 16,
  },
  inputt: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 15,
    marginTop: 12,
    color: 'black',
    flex: 1,
  },
  iconn: {
    marginRight: 6,
    marginLeft: 16,
  },
});
