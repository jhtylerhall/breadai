import { useSnackbar } from "@/context/SnackbarContex";
import React from "react";
import { Snackbar } from "react-native-paper";
import { View } from "react-native";

export default function SnackbarView() {
  const { visible, message, dismiss } = useSnackbar();

  return (
    <View className="absolute bottom-4 left-0 right-0 items-center z-50">
      <Snackbar
        visible={visible}
        onDismiss={dismiss}
        action={{
          label: "OK",
          onPress: dismiss,
        }}
        className="rounded-lg px-4"
        style={{
          backgroundColor: "#333",
        }}
      >
        {message}
      </Snackbar>
    </View>
  );
}
