import "../../global.css"
import {SplashScreen} from "expo-router";
import {useEffect} from "react";
import {useAuthStore} from "@/utils/authStore";
import {Platform} from "react-native";
import {StatusBar} from "expo-status-bar";
import {ThemeProvider} from "@/utils/ThemeContext";
import {useThemeStore} from "@/utils/themeStore";
import {useFonts} from "expo-font";
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import RootNavigator from "@/routes/RootNavigator";

// Evitar que la pantalla de splash se oculte automáticamente en plataformas que no son web
const isWeb = Platform.OS === "web";
if (!isWeb) {
    SplashScreen.preventAutoHideAsync();
}


// Crear una instancia de QueryClient para React Query
const queryClient = new QueryClient()


// Componente de diseño raíz que envuelve la aplicación
// con proveedores de contexto.
// También maneja la lógica de la pantalla de splash.
// Este componente asegura que la aplicación no se renderice
// hasta que todas las dependencias necesarias estén listas.
// Esto incluye la hidratación de los stores de Zustand
// y la carga de fuentes personalizadas.

export default function RootLayout() {

    // Cargar las fuentes personalizadas
    const [fontsLoaded, error] = useFonts({
        "HankenGrotesk-Regular": require("../../assets/fonts/HankenGrotesk-Regular.ttf"),
        "HankenGrotesk-Bold": require("../../assets/fonts/HankenGrotesk-Bold.ttf"),
        "HankenGrotesk-SemiBold": require("../../assets/fonts/HankenGrotesk-SemiBold.ttf"),
        "HankenGrotesk-Medium": require("../../assets/fonts/HankenGrotesk-Medium.ttf"),
        "HankenGrotesk-Light": require("../../assets/fonts/HankenGrotesk-Light.ttf"),
        "HankenGrotesk-ExtraBold": require("../../assets/fonts/HankenGrotesk-ExtraBold.ttf"),
    });

    // Manejar errores de carga de fuentes
    useEffect(() => {
        if (error) throw error;
    }, [error]);


    const {_hasHydrated: authHydrated,} = useAuthStore();
    const {_hasHydrated: themeHydrated, theme} = useThemeStore();

    useEffect(() => {
        if (authHydrated && themeHydrated && fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [authHydrated, themeHydrated, fontsLoaded]);

    // Esperar a que se hidraten los stores y se carguen las fuentes antes de renderizar la aplicación
    if ((!authHydrated || !themeHydrated || !fontsLoaded) && !isWeb) {
        return null;
    }

    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <StatusBar style={theme === "dark" ? "light" : "dark"}/>
                <RootNavigator/>
            </QueryClientProvider>
        </ThemeProvider>
    )
}