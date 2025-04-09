import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import { SignOutButton } from './../../components/SignOutButton'
import LoginScreen from './../../components/LoginScreen'

export default function Page() {
    const { user } = useUser()

    return (
        <View>
            <Text>Hello World! This is Home Screen</Text>
            <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
            <SignOutButton />
        </View>
    )
}