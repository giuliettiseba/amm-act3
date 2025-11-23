import {ActivityIndicator, Image, Text, TouchableOpacity, View} from "react-native";
import {useLocalSearchParams, useRouter} from "expo-router";
import {useTheme} from "@/contexts/ThemeContext";
import {useQuery} from "@tanstack/react-query";
import {Book} from "@/types/Book";
import {useAlertWithHaptics} from "@/hooks/useAlertWithHaptics";
import {API_BASE_URL} from "@/utils/constants";

const LibroDetalle = () => {
        const {id} = useLocalSearchParams();
        const {themeColors} = useTheme();
        const router = useRouter();
        const {showAlert} = useAlertWithHaptics()

        // const libro = libros.find((libro) => libro.id.toString() === id);
        const {isPending, error, data: libro} = useQuery<Book>({
            queryKey: ['libros', id],
            queryFn: () =>
                fetch(`${API_BASE_URL}/books/${id}`).then((res) =>
                    res.json(),
                ),
        })

        if (error) {
            return showAlert('Error', 'No se pudieron cargar los detalles del libro. Por favor, inténtalo de nuevo más tarde.', 'error');
        }

        if (isPending) {
            return (
                <ActivityIndicator size="large"/>
            )
        }

        return (
            <View style={{backgroundColor: themeColors.background}} className="flex-1 pt-5 mx-6">

                <Text className="text-2xl mb-2 text-center"
                      style={{color: themeColors.cardForeground, fontFamily: 'HankenGrotesk-Bold'}}>
                    {libro.titulo}
                </Text>

                <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Medium'}}
                      className="text-lg mb-4 text-center">
                    {libro.autor}
                </Text>

                {/*<View className="p-4">*/}
                <Image
                    src={libro.imagen}
                    className="w-80 aspect-square rounded-xl mb-4 border-2 self-center"
                    resizeMode="cover"
                />


                <View className="mb-4">
                    <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-SemiBold'}}
                          className="text-lg mb-2">
                        Sinopsis
                    </Text>
                    <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}}
                          className="text-base leading-6">
                        {libro.sinopsis}
                    </Text>
                </View>

                {libro.categoria && (
                    <View className="mb-4">
                        <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-SemiBold'}}
                              className="text-lg mb-2">
                            Género
                        </Text>
                        <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}}
                              className="text-base">
                            {libro.categoria}
                        </Text>
                    </View>
                )}

                {libro.año && (
                    <View className="mb-4">
                        <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-SemiBold'}}
                              className="text-lg mb-2">
                            Año de publicación
                        </Text>
                        <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}}
                              className="text-base">
                            {libro.año}
                        </Text>
                    </View>
                )}


                <TouchableOpacity
                    onPress={() => {
                        router.back()
                    }}
                    style={{backgroundColor: themeColors.primary}}
                    className="py-3 px-4 rounded-lg"
                >
                    <Text style={{color: themeColors.primaryForeground, fontFamily: 'HankenGrotesk-SemiBold'}}
                          className="text-center">
                        Volver a catalogo
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
;

export default LibroDetalle;
