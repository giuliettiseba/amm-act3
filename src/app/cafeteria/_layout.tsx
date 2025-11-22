import {Stack} from "expo-router";

const CafeteriaLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>)
}

export default CafeteriaLayout;