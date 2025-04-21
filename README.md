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

<pre lang="markdown"><code> ``` breadai/ ├── assets/ # Image assets (icons, bread backgrounds, etc.) ├── components/ # Reusable UI components │ └── buttons/ # Custom buttons like StartRecipe, StartBaking ├── context/ # Global app state via React Context (e.g., BreadContext) ├── constants/ # Theme and global styling ├── types/ # Shared TypeScript types ├── app/ # Expo Router screens (e.g., index, start) ├── App.tsx # App entry point ├── app.json # Expo configuration └── ... # Babel, Tailwind, and ESLint configs ``` </code></pre>

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
