import {Text, TouchableOpacity, View} from "react-native";
import {router} from "expo-router";


export default function IndexScreen() {

    const buttons = Array.from({length: 9}, (_, i) => `Button ${i + 1}`);

    return (
        <View className="flex-1 h-full w-full  gap-4 p-4 bg-dark-background">

            <TouchableOpacity                className="w-full h-12 bg-dark-primary-foreground  rounded-lg items-center justify-center"
                onPress={() => router.push('/tabs/(stack)/libros')}
            >
                <Text className="text-dark-primary font-bold">Catalogo de libros</Text>
            </TouchableOpacity>


            {buttons.map((buttonText, index) => (
                <TouchableOpacity
                    key={index}
                    className="w-full h-12 bg-dark-primary-foreground  rounded-lg items-center justify-center"
                    onPress={() => console.log(`${buttonText} pressed`)}
                >
                    <Text className="text-dark-primary font-bold">{buttonText}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}