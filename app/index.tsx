import { RelativePathString, router, useRouter } from "expo-router";
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const logo = require("../assets/images/dinetimelogo.png")
const entrylogo = require('../assets/images/Frame.png')
export default function Index() {
  const router = useRouter()
  return (
    <SafeAreaView className="bg-[#2b2b2b]">
      <StatusBar barStyle={'light-content'} backgroundColor={"#2b2b2b"} />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex justify-center items-center">
          <Image source={logo} style={{ height: 300, width: 300 }} />
          <View className="w-3/4">
            <TouchableOpacity onPress={() => router.push('/signup' as RelativePathString)} className="p-2 my-2 bg-[#f79f2c] rounded-lg">
              <Text className="text-center font-semibold text-base">Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/home' as RelativePathString)} className="p-2 my-2 bg-[#2b2b2b] border border-[[#f79f2c]] rounded-lg ">
              <Text className=" text-[#f79f2c] text-center font-semibold text-base max-w-fit">Guest User</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-base  text-white font-semibold my-4">
              <View className="border-b-2 border-[#f79f2c] p-2 m-2 w-24" /> or{" "}
              <View className="border-b-2 border-[#f79f2c] p-2 m-2 w-24" />
            </Text>
          </View>
          <TouchableOpacity onPress={() => router.push('/signin' as RelativePathString)} className="flex-row p-2 m-2 items-center">
            <Text className="text-white text-base font-semibold ">Already a User?{" "}</Text>
            <Text className="text-[#f79f2c] underline font-semibold">Sign in</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-1 ">
          <Image source={entrylogo} className="w-full h-full " resizeMode="contain" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
