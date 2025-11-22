import {Text, TouchableOpacity, View} from "react-native";
import {Link} from "expo-router";


export default function IndexScreen() {

    return (
        <View className="flex-1 h-full w-full  gap-4 p-4 bg-dark-background">

            <Link asChild push href="/libros">
                <TouchableOpacity className="w-full h-12 bg-dark-primary-foreground  rounded-lg items-center justify-center">
                    <Text className="text-dark-primary font-bold">Catalogo de libros</Text>
                </TouchableOpacity>
            </Link>

        </View>
    );
}