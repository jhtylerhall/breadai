import { memo, useState, useCallback } from "react";
import { Appbar } from "react-native-paper";
import { Image, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import MainIcon from "@/assets/images/icons/MainIcon.png";
import { CustomTimePicker } from "@/components/time/CustomTimePicker/CustomTimePicker";
import { Timers } from "@/components/time/Timers/Timers";

function TopNavComponent() {
  const [timePickerVisible, setTimePickerVisble] = useState(false);

  const onPressTimer = useCallback(() => {
    setTimePickerVisble(true);
  }, []);

  const onPressAccount = useCallback(() => {
    // TODO: open account page
  }, []);

  return (
    <View>
      {timePickerVisible && (
        <CustomTimePicker
          visible={timePickerVisible}
          setVisible={setTimePickerVisble}
        />
      )}

      <Appbar.Header className="bg-bread flex-row items-center justify-between">
        {/* Logo */}
        <Image
          source={MainIcon}
          className="w-9 h-9 ml-2 rounded-full"
          resizeMode="contain"
        />
        <View className="relative flex-1 mx-2">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
          >
            <Timers />
          </ScrollView>
          <LinearGradient
            colors={["transparent", "#f4a261"]}
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: 24,
              zIndex: 10,
            }}
            pointerEvents="none"
          />
        </View>
        <View className="flex-row items-center space-x-1 mr-2">
          <Appbar.Action icon="timer" onPress={onPressTimer} />
          <Appbar.Action icon="account" onPress={onPressAccount} />
        </View>
      </Appbar.Header>
    </View>
  );
}

export const TopNav = memo(TopNavComponent);
