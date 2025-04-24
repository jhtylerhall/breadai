import { breadImages } from "@/constants/configs";
import { useBread } from "@/context/BreadContext";
import { usePathname } from "expo-router";
import { View, Image } from "react-native";
import MainIcon from "@/assets/images/icons/MainIcon.png";
import { memo } from "react";

function BreadIconComponent() {
  const pathname = usePathname();
  const { selectedBread } = useBread();
  return pathname.includes("baking") && selectedBread ? (
    <View>
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
