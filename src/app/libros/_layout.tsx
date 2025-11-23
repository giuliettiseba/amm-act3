import {Stack} from "expo-router";
import {useTheme} from "@/contexts/ThemeContext";

const LibrosLayout = () => {
    const {themeColors} = useTheme();

    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: {backgroundColor: themeColors.background}
            }}>
            <Stack.Screen name="[id]" options={{presentation: 'modal'}}/>
        </Stack>
    )
}

export default LibrosLayout;
