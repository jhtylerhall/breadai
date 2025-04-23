import { memo, useState, useCallback } from "react";
import { Appbar } from "react-native-paper";
import { Image, View } from "react-native";
import MainIcon from "@/assets/images/icons/MainIcon.png";
import { CustomTimePicker } from "@/components/time/CustomTimePicker/CustomTimePicker";
import { useBread } from "@/context/BreadContext";
import { Timers } from "@/components/time/Timers/Timers";

function TopNavComponent() {
  const { timers } = useBread();
  const [timePickerVisible, setTimePickerVisble] = useState(false);
  const onPressTimer = useCallback(() => {
    setTimePickerVisble(true);
  }, []);
  const onPressAccount = useCallback(() => {
    // TODO: open account page
  }, []);

  return (
    <View>
      <CustomTimePicker
        visible={timePickerVisible}
        setVisible={setTimePickerVisble}
      />
      <Appbar.Header className="bg-bread">
        {/* TODO: have back action control going back in steps */}
        {/* <Appbar.BackAction onPress={() => {}} /> */}
        <Image
          source={MainIcon}
          className="w-9 h-9 ml-2 rounded-full"
          resizeMode="contain"
        />
        <Timers />
        <Appbar.Content title="" />
        <Appbar.Action icon="timer" onPress={onPressTimer} />
        <Appbar.Action icon="account" onPress={onPressAccount} />
      </Appbar.Header>
    </View>
  );
}

export const TopNav = memo(TopNavComponent);
