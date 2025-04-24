import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { View } from "react-native";
import theme from "../constants/theme";
import { BreadProvider } from "../context/BreadContext";
import { BottomNav } from "@/components/navigation/BottomNav/BottomNav";
import { TopNav } from "@/components/navigation/TopNav/TopNav";
import { SnackbarProvider } from "@/context/SnackbarContex";
import SnackbarView from "@/components/feedback/SnackbarView";

export default function Layout() {
  return (
    <PaperProvider theme={theme}>
      <BreadProvider>
        <SnackbarProvider>
          <View className="flex-1 bg-white">
            <TopNav />
            <SnackbarView />
            <Stack screenOptions={{ headerShown: false }} />
            <BottomNav />
          </View>
        </SnackbarProvider>
      </BreadProvider>
    </PaperProvider>
  );
}
