import { BottomNavigation } from "react-native-paper";
import { useRouter, usePathname } from "expo-router";
import { memo, useCallback, useMemo } from "react";

function BottomNavComponent() {
  const router = useRouter();
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      { key: "", title: "Home", focusedIcon: "home" },
      { key: "start", title: "Recipes", focusedIcon: "baguette" },
      { key: "achievements", title: "Achievements", focusedIcon: "trophy" },
    ],
    []
  );

  const index = useMemo(() => {
    return routes.findIndex((r) =>
      r.key === "" ? pathname === "/" : pathname.includes(r.key)
    );
  }, [pathname, routes]);

  const onTabPress = useCallback(
    ({ route }: { route: { key: string } }) => {
      router.push(`./${route.key}`);
    },
    [router]
  );

  return (
    <BottomNavigation.Bar
      navigationState={{ index, routes }}
      onTabPress={onTabPress}
    />
  );
}

export const BottomNav = memo(BottomNavComponent);
