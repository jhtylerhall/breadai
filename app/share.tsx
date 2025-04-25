import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function ShareScreen() {
  const [image, setImage] = useState<string | null>(null);

  const onPickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });

    if (!result.canceled && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      setImage(uri);
      await AsyncStorage.setItem("sharedImage", uri);
      await AsyncStorage.setItem(
        "achievement",
        JSON.stringify({ sharedBread: true })
      );
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-bread px-4">
      <Text className="text-white text-lg mb-4 font-bold">
        Share your finished bread to unlock an achievement!
      </Text>
      <Button title="Upload Bread Photo" onPress={onPickImage} />
      {image && <Text className="mt-4 text-white">✅ Photo shared!</Text>}
    </View>
  );
}
