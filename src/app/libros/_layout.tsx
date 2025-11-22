import {Stack} from "expo-router";
import {useTheme} from "@/utils/ThemeContext";

const LibrosLayout = () => {
    const {colors} = useTheme();

    return (
        <Stack
            screenOptions={{
                contentStyle: {
                    backgroundColor: colors.background,
                },
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="[id]"
                options={{
                    presentation: "modal",
                    headerShown: true,
                    headerTitle: "Detalle del Libro",
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
        </Stack>
    )
}

export default LibrosLayout;
