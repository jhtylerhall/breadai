import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F4A261',        // warm bread orange 🍞
    secondary: '#2A9D8F',      // accent teal
    background: '#FFF8F0',     // soft off-white
    surface: '#FFFFFF',
    text: '#333333',
  },
};

export default theme;
