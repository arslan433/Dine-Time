import { RelativePathString, router, useRouter } from "expo-router";
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const logo = require("../assets/images/dinetimelogo.png")
export default function Index() {
  const router = useRouter()
  return (
    <SafeAreaView className="bg-[#2b2b2b]">
      <StatusBar barStyle={'light-content'} backgroundColor={"#2b2b2b"}/>
      <ScrollView contentContainerStyle={{height:"100%"}}>

      <View>
        <Image source={logo} style={{ height: 300, width: 300 }} />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
