import {Alert, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {useAuthStore} from "@/utils/authStore";
import * as Haptics from 'expo-haptics';
import {validateEmail} from "@/utils/utils";
import {hapticFeedback} from "@/utils/nexus_hapatics";
import MorphingGlassButton from "@/components/MorphingGlassButton";
import {MorphingGlassTextInput} from "@/components/MorphingGlassTextInput";
import AnimatedBackground from "@/components/AnimatedBackground";


export default function SignInScreen() {

    const MAX_PASSWORD_LENGTH = 3;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const {logIn} = useAuthStore();
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter both email and password');
            await Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Warning
            )
            return;
        }

        setIsLoading(true);
        try {
            logIn();
            await Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success)

        } catch (error) {
            Alert.alert('Error', 'Invalid credentials. Please try again.');
            await Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Error);
        } finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {


        if (password.length >= MAX_PASSWORD_LENGTH) {
            setValidPassword(true);
        } else {
            setValidPassword(false);
        }


        if (validateEmail(email)) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }


        hapticFeedback(validPassword && validEmail ? 'selection' : 'light');
    }, [password, email]);


    const readyToLogin = validEmail && validPassword;


    return (
        <View className="flex-1 justify-center items-center bg-dark-primary-foreground">
            <AnimatedBackground validEmail={validEmail} validPassword={validPassword} />
            <View className="w-full max-w-sm bg-dark-background p-6 rounded-lg shadow-md">

                <Text className="text-3xl font-extralight text-center mb-6 text-dark-primary">Nexus</Text>

                <MorphingGlassTextInput
                    placeholder="Email"
                    keyboardType="email-address"
                    hint={validEmail ? undefined : 'Please enter a valid email address'}
                    value={email}
                    setValue={setEmail}
                />


                <MorphingGlassTextInput
                    placeholder="Password"
                    keyboardType="visible-password"
                    hint={validPassword ? undefined : `Password must be at least ${MAX_PASSWORD_LENGTH} characters`}
                    secureTextEntry
                    value={password}
                    setValue={setPassword}
                />
            </View>

            <MorphingGlassButton
                readyToLogin={readyToLogin}
                isLoading={isLoading}
                errorMessage={
                    !validEmail
                        ? "Invalid email address"
                        : !validPassword
                            ? "Password too short"
                            : null
                }
                onPress={handleLogin}/>
            <Text className="text-dark-foreground-muted text-center">Forgot Password?</Text>

        </View>
    )
}