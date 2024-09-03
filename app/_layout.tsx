import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { FavouritesProvider } from "@/contexts/FavouritesProvider"; // Prevent the splash screen from auto-hiding before asset loading is complete.

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <FavouritesProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false, title: "Home" }}
        />
        <Stack.Screen name="details" options={{ title: "Pokemon detail" }} />
      </Stack>
    </FavouritesProvider>
  );
}
