import { View, Text, Image, ScrollView } from 'react-native'
// import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const logo = require("../../assets/images/dinetimelogo.png")

const home = () => {
  return (

    <SafeAreaView style={{ backgroundColor: '#2b2b2b' }}>
      <View className='items-center flex'>
        <View className='bg-slate-500 w-11/12 rounded-lg shadow-lg justify-between items-center flex flex-row p-2'>
          <View className='flex flex-row'>
            <Text className='text-white text-lg' >Welcome to</Text>
            <Image source={logo} style={{ height: 25, width: 100 }} resizeMode='cover' />
          </View>
        </View>
      </View>
      <ScrollView>
       
      </ScrollView>
    </SafeAreaView>
  )
}
export default home