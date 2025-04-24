import { MD3LightTheme } from "react-native-paper";

// primary: "#F4A261", // still used for buttons, accents
// onPrimary: "#000000", // text ON primary-colored surfaces
// secondary: "#2A9D8F",
// background: "#FFF8F0",
// surface: "#FFFFFF",
// text: "#333333", // default text color

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
  },
};

export default theme;
