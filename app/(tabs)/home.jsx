import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const logo = require("../../assets/images/dinetimelogo.png")

const home = () => {
  return (

    <SafeAreaView style={{ backgroundColor: '#2b2b2b' }}>
      <View className='items-center flex'>
        <View className='bg-slate-500  rounded-lg shadow-lg justify-between items-center flex flex-row p-2'>
          <View className='flex flex-row'>
            <Text className='text-6xl text-white' >Wellcome to</Text>
          <Text className='text-2xl text-white'>HIIIIIIIII</Text>
            <Image source={logo} style={{ height: 25, width: 100 }} resizeMode='cover' />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default home