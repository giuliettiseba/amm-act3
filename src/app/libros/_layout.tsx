import {Stack} from "expo-router";
import {useTheme} from "@/utils/ThemeContext";

const LibrosLayout = () => {
    const {colors} = useTheme();

    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: {backgroundColor: colors.background}
            }}>
            <Stack.Screen name="[id]" options={{presentation: 'modal'}}/>
        </Stack>
    )
}

export default LibrosLayout;
