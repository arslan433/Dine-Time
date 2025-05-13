import { RelativePathString, router, useRouter } from "expo-router";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter()
  return (
    <View
      className="flex-1 items-center justify-center">
      <Text className="text-xl text-black-700">Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity onPress={() => router.push("/home" as RelativePathString)} >
        <Text>Change Route</Text>
      </TouchableOpacity>
    </View>
  );
}
