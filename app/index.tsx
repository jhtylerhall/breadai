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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text variant="headlineMedium">Welcome to Bread.ai</Text>
      <Button mode="contained" onPress={onStartBaking}>
        Start Baking
      </Button>
    </View>
  );
}
