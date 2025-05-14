import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Formik } from 'formik'
import validationSchema from '../../utlities/signupSchema'
import { push } from 'expo-router/build/global-state/routing'
const logo = require("../../assets/images/dinetimelogo.png")
const entrylogo = require('../../assets/images/Frame.png')
const signup = () => {
  const router = useRouter()
  return (
    <SafeAreaView className="bg-[#2b2b2b]">
      <StatusBar barStyle={'light-content'} backgroundColor={"#2b2b2b"} />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex justify-center items-center">
          <Image source={logo} style={{ height: 200, width: 200 }} />
          <Text className="text-lg text-white font-semibold my-4 ">Let's get you started</Text>
          <View className='w-5/6'>

            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={validationSchema}
            // onSubmit={handleSignup}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View className='w-full'>
                  <Text className='text-white mb-1'>Email</Text>
                  <TextInput
                    keyboardType='email-address'
                    className='border border-[#f79f2c] text-white  rounded px-1'
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {touched.email && errors.email && <Text className='text-red-600 text-xs'>{errors.email}</Text>}

                  <Text className='text-white mt-4 mb-1'>Password</Text>
                  <TextInput
                    className='border border-[#f79f2c] text-white max-w-full rounded px-1'
                    secureTextEntry
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  {touched.password && errors.password && <Text className='text-red-600 text-xs'>{errors.password}</Text>}
                  <View className="w-full">
                    <TouchableOpacity onPress={handleSubmit} className="p-2 my-2 mt-10 bg-[#f79f2c] rounded-lg">
                      <Text className="text-center font-semibold text-base">Sign In</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
            <TouchableOpacity onPress={() => router.push('/signup')} className="flex-row p-2 m-2 mt-2 items-center justify-center">
              <Text className="text-white text-base font-semibold ">New User?{" "}</Text>
              <Text className="text-[#f79f2c] underline font-semibold">Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-base text-white font-semibold my-4">
              <View className="border-b-2 border-[#f79f2c] p-2 m-2 w-24" /> or{" "}
              <View className="border-b-2 border-[#f79f2c] p-2 m-2 w-24" />
            </Text>
          </View>
          <TouchableOpacity onPress={() => router.push('/home')} className="p-2 my-2 bg-[#2b2b2b] flex-row ">
            <Text className='text-white'>Be a </Text>
            <Text className=" text-[#f79f2c] text-center underline font-semibold text-base max-w-fit">Guest User</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-1 ">
          <Image source={entrylogo} className="w-full h-full " resizeMode="contain" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signup