import {SplashScreen, Stack} from "expo-router";
import {useEffect} from "react";
import "../../global.css"
import {useAuthStore} from "@/utils/authStore";
import {Platform} from "react-native";
import {StatusBar} from "expo-status-bar";

const isWeb = Platform.OS === "web";

if (!isWeb) {
    SplashScreen.preventAutoHideAsync();
}

export default function RootLayout() {

    //
    // const [fontsLoaded, error] = useFonts({
    //     "HankenGrotesk-Regular": require("../../assets/fonts/HankenGrotesk-Regular.ttf"),
    // });
    //
    // useEffect(() => {
    //     if (error) throw error;
    //
    // }, [fontsLoaded, error]);
    //
    // if (!fontsLoaded && !error) return null;
    // console.log(fontsLoaded, error);

    // https://zustand.docs.pmnd.rs/integrations/persisting-store-data#how-can-i-check-if-my-store-has-been-hydrated
    // Hide the splash screen after the store has been hydrated


    const {
        isLoggedIn,
        _hasHydrated,
    } = useAuthStore();

    // https://zustand.docs.pmnd.rs/integrations/persisting-store-data#how-can-i-check-if-my-store-has-been-hydrated
    // Hide the splash screen after the store has been hydrated
    useEffect(() => {
        if (_hasHydrated) {
            SplashScreen.hideAsync();
        }
    }, [_hasHydrated]);

    if (!_hasHydrated && !isWeb) {
        return null;
    }

    return (
        <>
            <StatusBar style="auto"/>
            <Stack>

                <Stack.Protected guard={isLoggedIn}>
                    <Stack.Screen name="(tabs)"
                                  options={{
                                      title: "Home",
                                      headerShown: false
                                  }}/>

                    <Stack.Screen
                        name="libros/index"
                        options={{
                            title: "Catálogo de Libros",
                            headerShown: true
                        }}
                    />
                    <Stack.Screen
                        name="libros/[id]"
                        options={{
                            title: "Detalle del Libro",
                            headerShown: true,
                        }}
                    />
                </Stack.Protected>
                <Stack.Protected guard={!isLoggedIn}>
                    <Stack.Screen name="sign-in" options={{headerShown: false}}/>
                </Stack.Protected>
            </Stack>
        </>
    )
}