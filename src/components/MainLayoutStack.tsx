import {Stack} from "expo-router";
import {useAuth} from "@/contexts/AuthContext";

export default function MainLayoutStack() {
    const {isAuthenticated} = useAuth();
    return (
        <Stack>
            <Stack.Protected guard={!isAuthenticated}>
                <Stack.Screen name="sign-in" options={{headerShown: false}}/>
            </Stack.Protected>
            <Stack.Protected guard={isAuthenticated}>
                <Stack.Screen name="tabs" options={{headerShown: false}}/>
            </Stack.Protected>

        </Stack>)
}