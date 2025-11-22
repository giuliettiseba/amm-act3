import {StatusBar} from "expo-status-bar";
import {SplashScreen} from "expo-router";
import {AuthProvider} from "@/contexts/AuthContext";
import {useFonts} from "expo-font";
import {useEffect} from "react";
import MainLayoutStack from "@/components/MainLayoutStack";
import "../../global.css"
import {SafeAreaView} from "react-native-safe-area-context";


export default function RootLayout() {
    const [fontsLoaded, error] = useFonts({
        "HankenGrotesk-Regular": require("../../assets/fonts/HankenGrotesk-Regular.ttf"),
    });

    useEffect(() => {
        if (error) throw error;

        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) return null;
    console.log(fontsLoaded, error);


    return (
        <AuthProvider>
            <StatusBar style="auto"/>
            <SafeAreaView className="flex-1 justify-center " >
                <MainLayoutStack/>
            </SafeAreaView>
        </AuthProvider>
    )
}