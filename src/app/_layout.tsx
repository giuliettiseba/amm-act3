import {SplashScreen, Stack} from "expo-router";
import {useEffect} from "react";
import "../../global.css"
import {useAuthStore} from "@/utils/authStore";
import {Platform} from "react-native";
import {StatusBar} from "expo-status-bar";
import {ThemeProvider, useTheme} from "@/utils/ThemeContext";
import {useThemeStore} from "@/utils/themeStore";
import {useFonts} from "expo-font";

const isWeb = Platform.OS === "web";

if (!isWeb) {
    SplashScreen.preventAutoHideAsync();
}

function RootNavigator() {
    const {isLoggedIn} = useAuthStore();
    const {colors} = useTheme();

    return (
        <Stack>
            <Stack.Protected guard={isLoggedIn}>
                <Stack.Screen name="(tabs)"
                              options={{
                                  title: "Home",
                                  headerShown: false
                              }}/>
                <Stack.Screen
                    name="libros"
                    options={{
                        headerShown: true,
                        title: "Catálogo de Libros",
                        headerStyle: {
                            backgroundColor: colors.card,
                        },
                        headerTintColor: colors.foreground,
                        headerTitleStyle: {
                            color: colors.foreground,
                            fontFamily: 'HankenGrotesk-SemiBold',
                        },
                    }}
                />
                <Stack.Screen
                    name="coworking"
                    options={{
                        headerShown: true,
                        title: "Coworking",
                        headerStyle: {
                            backgroundColor: colors.card,
                        },
                        headerTintColor: colors.foreground,
                        headerTitleStyle: {
                            color: colors.foreground,
                            fontFamily: 'HankenGrotesk-SemiBold',
                        },
                    }}
                />

                <Stack.Screen
                    name="informacion"
                    options={{
                        headerShown: true,
                        title: "Informacion",
                        headerStyle: {
                            backgroundColor: colors.card,
                        },
                        headerTintColor: colors.foreground,
                        headerTitleStyle: {
                            color: colors.foreground,
                            fontFamily: 'HankenGrotesk-SemiBold',
                        },
                    }}
                />

                <Stack.Screen
                    name="cafeteria"
                    options={{
                        headerShown: true,
                        title: "Cafetería",
                        headerStyle: {
                            backgroundColor: colors.card,
                        },
                        headerTintColor: colors.foreground,
                        headerTitleStyle: {
                            color: colors.foreground,
                            fontFamily: 'HankenGrotesk-SemiBold',
                        },
                    }}
                />



            </Stack.Protected>
            <Stack.Protected guard={!isLoggedIn}>
                <Stack.Screen name="sign-in" options={{headerShown: false}}/>
            </Stack.Protected>
        </Stack>
    );
}

export default function RootLayout() {

    const [fontsLoaded, error] = useFonts({
        "HankenGrotesk-Regular": require("../../assets/fonts/HankenGrotesk-Regular.ttf"),
        "HankenGrotesk-Bold": require("../../assets/fonts/HankenGrotesk-Bold.ttf"),
        "HankenGrotesk-SemiBold": require("../../assets/fonts/HankenGrotesk-SemiBold.ttf"),
        "HankenGrotesk-Medium": require("../../assets/fonts/HankenGrotesk-Medium.ttf"),
        "HankenGrotesk-Light": require("../../assets/fonts/HankenGrotesk-Light.ttf"),
        "HankenGrotesk-ExtraBold": require("../../assets/fonts/HankenGrotesk-ExtraBold.ttf"),
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    const {
        _hasHydrated: authHydrated,
    } = useAuthStore();

    const {
        _hasHydrated: themeHydrated,
        theme,
    } = useThemeStore();

    // https://zustand.docs.pmnd.rs/integrations/persisting-store-data#how-can-i-check-if-my-store-has-been-hydrated
    // Hide the splash screen after the store has been hydrated
    useEffect(() => {
        if (authHydrated && themeHydrated && fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [authHydrated, themeHydrated, fontsLoaded]);

    if ((!authHydrated || !themeHydrated || !fontsLoaded) && !isWeb) {
        return null;
    }

    return (
        <ThemeProvider>
            <StatusBar style={theme === "dark" ? "light" : "dark"}/>
            <RootNavigator />
        </ThemeProvider>
    )
}