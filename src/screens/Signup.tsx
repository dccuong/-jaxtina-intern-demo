import React from 'react'
import { Text, View, Image, StyleSheet, TextInput, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import BComponent from '../component/Button'
import TextComponent from '../component/TextCpn'
import { useForm, Controller, SubmitErrorHandler,SubmitHandler} from 'react-hook-form';
type Props = {}

export const Signup = ({ navigation }: any) => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            Name:``,
            Email: '',
            PNumber:``,
            Pass: '',
            Datee:''
        }
    });
    const onSubmit = (data:any) => {
        console.log(data, "log1")
        navigation.navigate("Login")
}

   
        ;
    const dataText = {
        title1: "Tạo tài khoản",
        title2: "Sắp xong rồi. Bạn hãy tạo tài khoản để được hỗ trợ trong suốt quá trình nhé!",
        ip1: "Họ và tên",
        ip2: "Email",
        ip3: "Số điện thoại",
        ip4: "Mật khẩu",
        ip5: "Ngày, thàng, năm, sinh",
        btn: "Hãy bắt đầu",
        btn2: "Đăng nhập bằng Facebook",
        title3: "Đã là người dùng Jaxtina rồi?"

    }
    return (
        <SafeAreaProvider style={styles.Screen} >
            <ScrollView>
                <View style={{ height: 45, flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}><Image
                            source={require('../../assets/arrow-left.png')}
                            style={{ width: 50, height: 45, marginTop: 10 }}
                        />
                    </TouchableOpacity>
                    <TextComponent title={dataText.title1} color={"black"} size={16} weight={600} />
                    <Text style={{ width: 45 }}></Text>
                </View>

                <View style={{ alignItems: 'center', margin: 16 }}>
                    <Image
                        source={require('../../assets/Logo.png')}
                        style={{ width: 98, height: 67, marginBottom: 23 }}
                    />
                    <TextComponent mb={12} title={dataText.title2} size={15} weight={400} color={"black"} />
                    {/* ///////////////////////////////////////// */}
                    <View style={styles.inputt} >
                        <Image
                            source={require('../../assets/in1.png')} />
                         <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    placeholderTextColor={'#868E96'}
                                    placeholder="Name"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="Name"
                            rules={{ required: true }}
                        />
                        {errors.Name && <Text>This is required.</Text>}

                    </View>
                    <View style={styles.inputt} >
                        <Image
                            source={require('../../assets/in2.png')} />
                       <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    placeholderTextColor={'#868E96'}
                                    placeholder="Email"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="Email"
                            rules={{ required: true }}
                        />
                        {errors.Email && <Text>This is required.</Text>}

                    </View>
                    <View style={styles.inputt} >
                        <Image
                            source={require('../../assets/in3.png')} />
                            <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    placeholderTextColor={'#868E96'}
                                    placeholder="Số điện thoại"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="PNumber"
                            rules={{ required: true }}
                        />
                        {errors.PNumber && <Text>This is required.</Text>}

                    </View>
                    
                    <View style={styles.inputt} >
                        <Image

                            source={require('../../assets/in5.png')} />
                         <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    placeholderTextColor={'#868E96'}
                                    placeholder="Pass"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="Pass"
                            rules={{ required: true }}
                        />
                        {errors.Pass && <Text>This is required.</Text>}

                    </View>
                    <View style={styles.inputt} >
                        <Image
                            source={require('../../assets/in4.png')} />
                         <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    placeholderTextColor={'#868E96'}
                                    placeholder="Mật khẩu"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="Datee"
                            rules={{ required: true }}
                        />
                        {errors.Datee && <Text>This is required.</Text>}

                    </View>


                </View>
                {/* btn_1 */}
                <TouchableOpacity style={{ alignItems: "center" }} onPress={handleSubmit(onSubmit)}>
                    <BComponent bgCl={"#CD2027"} title={dataText.btn} color="#fff" size={17} weight={600} widthh={343} />
                </TouchableOpacity>

                {/* hoacwj */}
                <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: "center" }}>
                    <View style={{ borderWidth: 1, width: 122, borderColor: "#C5CEE0", marginRight: 8 }}></View>
                    <TextComponent title='Hoặc' color={"#495057"} size={15} weight={400} />
                    <View style={{ borderWidth: 1, width: 122, borderColor: "#C5CEE0", marginLeft: 8 }}></View>
                </View>
                {/* btn_2 */}
                <TouchableOpacity style={{ alignItems: "center" }} onPress={() => { navigation.navigate("Login") }}>
                    <BComponent bgCl={"#1877F2"} title={dataText.btn2} color="#fff" size={17} weight={600} widthh={343} />
                </TouchableOpacity>
                {/*  */}
                <View style={{ marginTop: 14, justifyContent: "center", flexDirection: "row" }}>

                    <TextComponent title={dataText.title3} color="black" size={15} weight={400} />
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}><TextComponent title={" Đăng nhập"} color="blue" size={15} weight={700} /></TouchableOpacity>

                </View>

            </ScrollView>
        </SafeAreaProvider>
    )
}
const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        marginTop: 14,
        marginLeft: 16,
        marginRight: 16,

    },
    inputt: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-start",
        paddingLeft: 10,
        paddingRight: 10,
        width: 343,
        borderRadius: 15,
        marginTop: 12,
        color: "black",
        flex: 1
    }
})
