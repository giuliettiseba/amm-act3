import {useAuthStore} from "@/utils/authStore";
import {useTheme} from "@/contexts/ThemeContext";
import {Stack} from "expo-router";

const RootNavigator = () => {
    const {isLoggedIn} = useAuthStore();
    const {themeColors} = useTheme();

    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: themeColors.card,
                },
                headerTintColor: themeColors.primary,
                headerTitleStyle: {
                    color: themeColors.foreground,
                    fontFamily: 'HankenGrotesk-SemiBold',
                },
            }}
        >
            <Stack.Protected guard={isLoggedIn}>
                <Stack.Screen name="(tabs)" options={{title: "Home", headerShown: false}}/>
                <Stack.Screen name="libros" options={{title: "Catálogo de Libros"}}/>
                <Stack.Screen name="coworking" options={{title: "Coworking"}}/>
                <Stack.Screen name="informacion" options={{title: "Informacion"}}/>
                <Stack.Screen name="cafeteria" options={{title: "Cafetería"}}/>
            </Stack.Protected>
            <Stack.Protected guard={!isLoggedIn}>
                <Stack.Screen name="sign-in" options={{headerShown: false}}/>
                </Stack.Protected>
        </Stack>
    );
};

export default RootNavigator;