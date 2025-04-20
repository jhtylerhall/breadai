import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { useCallback } from "react";

export default function Home() {
  const router = useRouter();
  const onStartBaking = useCallback(() => {
    router.push("./start");
  }, [router]);

  return (
    <View className="flex-1 justify-center items-center bg-bread">
      <Text className="text-white text-2xl font-bold">🍞 Tailwind is working!</Text>
    </View>
  );
}
