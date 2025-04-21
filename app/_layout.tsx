import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { View } from "react-native";
import theme from "../constants/theme";
import { BreadProvider } from "../context/BreadContext";
import { BottomNav } from "@/components/navigation/BottomNav/BottomNav";
import { TopNav } from "@/components/navigation/TopNav/TopNav";

export default function Layout() {
  return (
    <PaperProvider theme={theme}>
      <BreadProvider>
        <View className="flex-1 bg-white">
          <TopNav />
          <Stack screenOptions={{ headerShown: false }} />
          <BottomNav />
        </View>
      </BreadProvider>
    </PaperProvider>
  );
}
