import {View, Text, Image, ScrollView, Button} from "react-native";
import {useLocalSearchParams, useRouter} from "expo-router";
import {useLibros} from "@/hooks/useLibros";
import {useTheme} from "@/utils/ThemeContext";

const LibroDetalle = () => {
    const {id} = useLocalSearchParams();
    const {libros} = useLibros();
    const {colors} = useTheme();
    const router = useRouter();

    const libro = libros.find((libro) => libro.id.toString() === id);

    if (!libro) {
        return (
            <View style={{backgroundColor: colors.background}} className="flex-1 justify-center items-center">
                <Text style={{color: colors.foreground, fontFamily: 'HankenGrotesk-Medium'}} className="text-lg">Libro no encontrado</Text>
            </View>
        );
    }

    return (
        <ScrollView style={{backgroundColor: colors.background}} className="flex-1">

         <Button title={"Volver a catalogo"} onPress={() => {
             router.back();
         }} />
            <View className="p-4">
                <Image
                    src={libro.imagen}
                    className="w-full h-96 rounded-lg mb-4"
                    resizeMode="cover"
                />

                <Text style={{color: colors.foreground, fontFamily: 'HankenGrotesk-Bold'}} className="text-2xl mb-2">
                    {libro.titulo}
                </Text>

                <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Medium'}} className="text-lg mb-4">
                    {libro.autor}
                </Text>

                <View className="mb-4">
                    <Text style={{color: colors.foreground, fontFamily: 'HankenGrotesk-SemiBold'}} className="text-lg mb-2">
                        Sinopsis
                    </Text>
                    <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-base leading-6">
                        {libro.sinopsis}
                    </Text>
                </View>

                {libro.genero && (
                    <View className="mb-4">
                        <Text style={{color: colors.foreground, fontFamily: 'HankenGrotesk-SemiBold'}} className="text-lg mb-2">
                            Género
                        </Text>
                        <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-base">
                            {libro.genero}
                        </Text>
                    </View>
                )}

                {libro.anio && (
                    <View className="mb-4">
                        <Text style={{color: colors.foreground, fontFamily: 'HankenGrotesk-SemiBold'}} className="text-lg mb-2">
                            Año de publicación
                        </Text>
                        <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}} className="text-base">
                            {libro.anio}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default LibroDetalle;
