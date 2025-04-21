# 🥖 BreadAI

**BreadAI** is an interactive React Native application designed to guide users through the bread-making process. Leveraging AI-driven feedback, gamification elements, and intuitive UI components, BreadAI aims to make baking bread an engaging and educational experience.

---

## 🚀 Features

- **Step-by-Step Guidance** – Isolated screens for each baking step, ensuring clarity and focus.
- **AI-Powered Feedback** – Uses image recognition to analyze bread progress and provide real-time feedback.
- **Gamification** – Earn achievements and badges as you complete baking steps.
- **Integrated Timer** – Built-in timers help manage fermentation, baking, and resting durations.
- **Responsive Design** – Tailwind CSS and NativeWind integration for sleek mobile UI.

---

## 📁 Project Structure

```
breadai/
├── app/                                   # Expo Router screens
│   ├── _layout.tsx                        # Global layout wrapper with nav/context
│   ├── index.tsx                          # Home screen
│   ├── recipes.tsx                        # Select bread to bake or see recipe
│   └── achievements.tsx                   # WIP
│
├── assets/                                # Local image and icon assets
│   └── images/
│       └── breads/                        # Backgrounds for each bread type
│
├── components/                            # Reusable UI components
│   ├── BreadCarousel/                     # Horizontal bread selector
│   │   └── BreadCarousel.tsx
│   ├── buttons/                           # App-specific buttons
│   │   ├── StartRecipe/StartRecipe.tsx
│   │   └── StartBaking/StartBaking.tsx
│   └── TopNav/TopNav.tsx                  # Custom top app bar
│
├── constants/
│   └── theme.ts                           # React Native Paper theme setup
│
├── context/
│   └── BreadContext.tsx                   # Global context for selected bread and step
│
├── types/
│   └── Bread.ts                           # TypeScript types for bread & recipe steps
│
├── tailwind.config.js                     # Tailwind/NativeWind configuration
├── eslint.config.mjs                      # ESLint flat config for code quality
├── app.json                               # Expo app configuration
├── App.tsx                                # App entry point (wrapped by Expo Router)
├── package.json                           # Project dependencies and scripts
└── README.md                              # You are here 🍞
```

## 📱 Getting Started

1. Install dependencies

   ```bash
   npx install expo

   npm install

   npx expo install react-native-safe-area-context react-native-gesture-handler react-native-reanimated
   ```

2. Start the app

   ```bash
    npx expo start
   ```

   re-start the app by using --clear

   ```bash
    npx expo start --clear
   ```

3. Download expo app on phone or use Android Studio

4. Scan QR code if using phone or if using Android Studio press 'a' on the command line you did 'npx expo start'
