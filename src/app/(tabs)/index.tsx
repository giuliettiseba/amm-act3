import {Text, TouchableOpacity, View} from "react-native";
import {Link} from "expo-router";
import {useTheme} from "@/utils/ThemeContext";

export default function IndexScreen() {
    const {colors} = useTheme();

    return (
        <View style={{backgroundColor: colors.background}} className="flex-1 h-full w-full gap-4 p-4">
            <Link asChild push href="/libros">
                <TouchableOpacity
                    style={{backgroundColor: colors.border}}
                    className="w-full h-12 rounded-lg items-center justify-center"
                >
                    <Text style={{color: colors.primary}} className="font-bold">Catálogo de libros</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}