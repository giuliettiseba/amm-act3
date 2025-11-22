import {View, Text, Image, ScrollView} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {useLibros} from "@/hooks/useLibros";

const LibroDetalle = () => {
    const {id} = useLocalSearchParams();
    const {libros} = useLibros();

    const libro = libros.find((libro) => libro.id.toString() === id);

    if (!libro) {
        return (
            <View className="flex-1 justify-center items-center bg-dark-background">
                <Text className="text-dark-foreground text-lg">Libro no encontrado</Text>
            </View>
        );
    }

    return (
        <ScrollView className="flex-1 bg-dark-background">
            <View className="p-4">
                <Image
                    src={libro.imagen}
                    className="w-full h-96 rounded-lg mb-4"
                    resizeMode="cover"
                />

                <Text className="text-dark-foreground font-bold text-2xl mb-2">
                    {libro.titulo}
                </Text>

                <Text className="text-dark-foreground-muted text-lg mb-4">
                    {libro.autor}
                </Text>

                <View className="mb-4">
                    <Text className="text-dark-foreground font-semibold text-lg mb-2">
                        Sinopsis
                    </Text>
                    <Text className="text-dark-foreground-muted text-base leading-6">
                        {libro.sinopsis}
                    </Text>
                </View>

                {libro.genero && (
                    <View className="mb-4">
                        <Text className="text-dark-foreground font-semibold text-lg mb-2">
                            Género
                        </Text>
                        <Text className="text-dark-foreground-muted text-base">
                            {libro.genero}
                        </Text>
                    </View>
                )}

                {libro.anio && (
                    <View className="mb-4">
                        <Text className="text-dark-foreground font-semibold text-lg mb-2">
                            Año de publicación
                        </Text>
                        <Text className="text-dark-foreground-muted text-base">
                            {libro.anio}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default LibroDetalle;

