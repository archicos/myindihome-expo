import { Redirect, Stack } from "expo-router";
import { Text, View } from "react-native";
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { SignOutButton } from "@/components/SignOutButton";
import LoginScreen from "@/components/LoginScreen";

export default function Index() {
  const { user } = useUser()

  return (
    <View>
      
    </View>
  )
}
