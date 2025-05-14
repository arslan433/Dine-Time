import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Formik } from 'formik'
const logo = require("../../assets/images/dinetimelogo.png")
const entrylogo = require('../../assets/images/Frame.png')
const signup = () => {
    const router = useRouter()
    return (
        <SafeAreaView className="bg-[#2b2b2b]">
            <StatusBar barStyle={'light-content'} backgroundColor={"#2b2b2b"} />
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className="m-2 flex justify-center items-center">
                    <Image source={logo} style={{ height: 300, width: 300 }} />
                    <Text className="text-base text-white font-semibold my-4">Let's get you started</Text>
                <View className='w-5/6'>

                    <Formik
                        initialValues={{ email: '', password: '' }}
                    // onSubmit={handleSignup}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View className='w-full'>
                                <Text className='text-white'>Email</Text>
                                <TextInput
                                    className='border border-[#f79f2c] text-white  rounded px-1'
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                />
                                {touched.email && errors.email && <Text className='text-red-600 text-xs'>{errors.email}</Text>}

                                <Text className='text-white'>Password</Text>
                                <TextInput
                                    className='border border-[#f79f2c] text-white max-w-full rounded px-1'
                                    secureTextEntry
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                />
                                {touched.password && errors.password && <Text className='text-red-600 text-xs'>{errors.password}</Text>}
                                <View className="w-3/4">
                                    <TouchableOpacity onPress={handleSubmit} className="p-2 my-2 bg-[#f79f2c] rounded-lg">
                                        <Text className="text-center font-semibold text-base">Sign Up</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
                                </View>

                <View className="flex-1 ">
                    <Image source={entrylogo} className="w-full h-full " resizeMode="contain" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default signup