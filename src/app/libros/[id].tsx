import {ActivityIndicator, Alert, Button, Image, Text, TouchableOpacity, View} from "react-native";
import {useLocalSearchParams, useRouter} from "expo-router";
import {useTheme} from "@/utils/ThemeContext";
import {useQuery} from "@tanstack/react-query";
import {Book} from "@/types/Book";

const LibroDetalle = () => {
        const {id} = useLocalSearchParams();
        const {colors} = useTheme();
        const router = useRouter();

        // const libro = libros.find((libro) => libro.id.toString() === id);
        const {isPending, error, data} = useQuery({
            queryKey: ['libros', id],
            queryFn: () =>
                fetch(`https://mock.apidog.com/m1/1069422-1057565-default/books/${id}`).then((res) =>
                    res.json(),
                ),
        })

        if (error) {
            Alert.alert("Error", "No se pudo cargar el libro. Por favor, inténtalo de nuevo más tarde.");
        }

        if (isPending) {
            return (
                <ActivityIndicator size="large"/>
            )
        }

        // check data date is type book
        const libro = data as Book;

        if (!libro) {
            return (
                <View style={{backgroundColor: colors.background}} className="flex-1 justify-center items-center">
                    <Text style={{color: colors.foreground, fontFamily: 'HankenGrotesk-Regular'}}>
                        Libro no encontrado.
                    </Text>
                </View>
            )
        }


        return (
            <View style={{backgroundColor: colors.background }} className="flex-1 pt-5 mx-6">

                <Text className="text-2xl mb-2 text-center" style={{color: colors.cardForeground, fontFamily: 'HankenGrotesk-Bold'}}>
                    {libro.titulo}
                </Text>

                <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Medium'}}
                      className="text-lg mb-4 text-center" >
                    {libro.autor}
                </Text>

                {/*<View className="p-4">*/}
                    <Image
                        src={libro.imagen}
                        className="w-80 aspect-square rounded-xl mb-4 border-2 self-center"
                        resizeMode="cover"
                    />




                    <View className="mb-4">
                        <Text style={{color: colors.foreground, fontFamily: 'HankenGrotesk-SemiBold'}}
                              className="text-lg mb-2">
                            Sinopsis
                        </Text>
                        <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}}
                              className="text-base leading-6">
                            {libro.sinopsis}
                        </Text>
                    </View>

                    {libro.categoria && (
                        <View className="mb-4">
                            <Text style={{color: colors.foreground, fontFamily: 'HankenGrotesk-SemiBold'}}
                                  className="text-lg mb-2">
                                Género
                            </Text>
                            <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}}
                                  className="text-base">
                                {libro.categoria}
                            </Text>
                        </View>
                    )}

                    {libro.año && (
                        <View className="mb-4">
                            <Text style={{color: colors.foreground, fontFamily: 'HankenGrotesk-SemiBold'}}
                                  className="text-lg mb-2">
                                Año de publicación
                            </Text>
                            <Text style={{color: colors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}}
                                  className="text-base">
                                {libro.año}
                            </Text>
                        </View>
                    )}


                <TouchableOpacity
                    onPress={() => {
                        router.back()
                    }}
                    style={{backgroundColor: colors.primary}}
                    className="py-3 px-4 rounded-lg"
                >
                    <Text style={{color: colors.primaryForeground, fontFamily: 'HankenGrotesk-SemiBold'}} className="text-center">
                        Volver a catalogo
                    </Text>
                </TouchableOpacity>
                </View>

            // </View>
        );
    }
;

export default LibroDetalle;
