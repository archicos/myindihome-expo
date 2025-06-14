import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { Slot, Stack } from "expo-router";
import LoginScreen from "@/components/LoginScreen";

export default function RootLayout() {
  useFonts({
    'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium':require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf')
  })
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SignedIn>
          <Stack screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="(tabs)"/>
          </Stack>
      </SignedIn>
      <SignedOut>
          <LoginScreen />
      </SignedOut>
    </ClerkProvider>
  );
}
