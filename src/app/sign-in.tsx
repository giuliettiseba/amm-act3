import {ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {useAuthStore} from "@/utils/authStore";

export default function SignInScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const {logIn} = useAuthStore();

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter both email and password');
            return;
        }

        setIsLoading(true);
        try {
            logIn();

        } catch (error) {
            Alert.alert('Error', 'Invalid credentials. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <View className="flex-1 justify-center items-center bg-dark-primary-foreground">
            <View className="w-full max-w-sm bg-dark-background p-6 rounded-lg shadow-md">
                <Text className="text-3xl font-bold text-center mb-6 text-dark-primary">Login</Text>

                <TextInput
                    className="w-full p-3 mb-4 border bg-dark-border rounded-md text-dark-primary"
                    placeholder="Email"
                    placeholderTextColor="#a0aec0"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    className="w-full p-3 mb-4 border bg-dark-border rounded-md text-dark-primary"
                    placeholder="Password"
                    placeholderTextColor="#a0aec0"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity
                    className="w-full bg-dark-primary p-3 rounded-md items-center"
                    onPress={handleLogin}
                >
                    {isLoading ? (
                        <ActivityIndicator color="#fff"/>
                    ) : (
                        <Text className="text-dark-background text-lg font-semibold">Log In</Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity className="mt-4">
                    <Text className="text-dark-foreground-muted text-center">Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}