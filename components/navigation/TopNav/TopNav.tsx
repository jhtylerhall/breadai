import { memo } from "react";
import { Appbar } from "react-native-paper";
import { Image } from "react-native";
import MainIcon from "@/assets/images/icons/MainIcon.png";

function TopNavComponent() {
  return (
    <Appbar.Header className="bg-bread">
      {/* TODO: have back action control going back in steps */}
      {/* <Appbar.BackAction onPress={() => {}} /> */}
      <Image
        source={MainIcon}
        className="w-9 h-9 ml-2 rounded-full"
        resizeMode="contain"
      />
      <Appbar.Content title="" />
      <Appbar.Action icon="timer" onPress={() => {}} />
      <Appbar.Action icon="account" onPress={() => {}} />
    </Appbar.Header>
  );
}

export const TopNav = memo(TopNavComponent);
