import {useTheme} from "@/utils/ThemeContext";
import {Stack} from "expo-router";

const CoworkingLayout = () => {
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
        </Stack>
    )
}

export default CoworkingLayout;