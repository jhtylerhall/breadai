import { breadImages } from "@/constants/configs";
import { useBread } from "@/context/BreadContext";
import { usePathname, useRouter } from "expo-router";
import { View, Image } from "react-native";
import MainIcon from "@/assets/images/icons/MainIcon.png";
import { memo, useCallback } from "react";
import { IconButton, MD3Colors } from "react-native-paper";

function BreadIconComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const { selectedBread, setSelectedBread } = useBread();
  const onCancelBread = useCallback(() => {
    setSelectedBread(null);
    router.push("./");
  }, [router, setSelectedBread]);
  return pathname.includes("baking") && selectedBread ? (
    <View className={"inline-flex flex-row items-center"}>
      <IconButton
        icon="arrow-left-bold"
        iconColor={MD3Colors.secondary0}
        size={20}
        onPress={onCancelBread}
      />
      <Image
        source={breadImages[selectedBread]}
        className="w-9 h-9 ml-2 rounded-full"
        resizeMode="contain"
      />
    </View>
  ) : (
    <Image
      source={MainIcon}
      className="w-9 h-9 ml-2 rounded-full"
      resizeMode="contain"
    />
  );
}

export const BreadIcon = memo(BreadIconComponent);
