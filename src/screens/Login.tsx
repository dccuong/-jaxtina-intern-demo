import React, { useEffect } from 'react';
import {
    Controller, useForm
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
    Image, ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BComponent from '../component/Button';
import TextComponent from '../component/TextCpn';
import { globalDimension, scale } from '../scaling-utils';
import useTheme from '../useTheme';

export const Loginn = ({ navigation }: any) => {
    const {i18n}=useTranslation()
    const theme=useTheme()
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            Email: '',
            Pass: '',
        },
    });
    const onSubmit = (data: any) => {
        console.log(data, 'Login');
        navigation.navigate('TabScreen');
    };
    const { width } = useWindowDimensions();
    console.log(width, "Sssssss")
    globalDimension.widthh = width
    useEffect(() => {

    }, [width]);
   
    return (
        <View style={[styles.Screen,{backgroundColor:theme.colors.BACKGROUND}]}>
            <ScrollView>

                <View style={{ height: 45, alignItems: 'flex-start' }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack();
                        }}>
                        <Image
                            source={require('../../assets/arrow-left.png')}
                            style={{ width: 50, height: 45, marginTop: 10 }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', margin: 16, marginTop: 32 }}>
                    <Image
                        source={require('../../assets/Logo.png')}
                        style={{ width: 143, height: 96, marginBottom: 16 }}
                    />
                    <TextComponent
                        mb={12}
                        title={"title2"}
                        size={15}
                        weight={500}
                        color={'#2E3192'}
                    />
                    {/* ///////////////////////////////////////// */}

                    <View style={[styles.inputt,{ width: scale(343) }]}>
                        <Image source={require('../../assets/in2.png')} 
                        style={styles.iconn} />
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    placeholderTextColor={'#868E96'}
                                    placeholder={`${i18n.t("ip2")}`}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={{ width: "90%" }}
                                />
                            )}
                            name="Email"
                            rules={{ required: true }}
                        />

                    </View>
                    <View>{errors.Pass && <Text>This is required.</Text>}</View>
                    <View style={[styles.inputt,{ width: scale(343) }]}>
                        <Image source={require('../../assets/in5.png')} style={styles.iconn} />
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                placeholder={`${i18n.t("ip4")}`}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={{ width: scale(343) }}
                                />
                            )}
                            name="Pass"
                        />

                    </View>
                    <View>{errors.Pass && <Text>This is required.</Text>}</View>
                    <View
                        style={{
                            flex: 1,
                            width: scale(343),
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 12,
                        }}>
                        <View>
                            <Text></Text>
                        </View>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#2E3192' }}>
                            <Text style={{ color: '#2E3192', textAlign: 'center' }}>
                                Quên mật khẩu
                            </Text>
                        </View>
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
                        marginTop: 93
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
                        title={"title3"}
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
        marginTop: 14,
        marginLeft: 16,
        marginRight: 16,

    },
    inputt: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 15,
        marginTop: 16,
        color: 'black',
        flex: 1,
    },
    iconn: {
        marginRight: 6,
        marginLeft: 16,
    },
});
