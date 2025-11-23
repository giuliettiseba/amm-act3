import {ActivityIndicator, Image, Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {useTheme} from "@/contexts/ThemeContext";
import {Book} from "@/types/Book";
import {LIBROS_ENDPOINT} from "@/utils/constants";
import useApiClient from "@/hooks/useApiClient";
import {ErrorMessage} from "@/components/ErrorMessage";

const LibroDetalle = () => {
    const {id} = useLocalSearchParams();
    const {themeColors} = useTheme();
    const {isPending, error, data} = useApiClient<Book>(
        LIBROS_ENDPOINT, ["libro"], undefined, id as string);

    return (
        <View style={{
            flex: 1,
            backgroundColor: themeColors.background,
            padding: 10,
            alignContent: 'center',
            justifyContent: 'center'
        }}>
            {isPending && <ActivityIndicator size="large" className="align-middle"/>}

            {error && <ErrorMessage message={"Error al cargar los libros. " + error}/>}

            {data && !error && !isPending &&
                <>
                    <Text className="text-2xl mb-2 text-center"
                          style={{color: themeColors.cardForeground, fontFamily: 'HankenGrotesk-Bold'}}>
                        {data.titulo}
                    </Text>

                    <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Medium'}}
                          className="text-lg mb-4 text-center">
                        {data.autor}
                    </Text>

                    {/*<View className="p-4">*/}
                    <Image
                        src={data.imagen}
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
                            {data.sinopsis}
                        </Text>
                    </View>

                    {data.categoria && (
                        <View className="mb-4">
                            <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-SemiBold'}}
                                  className="text-lg mb-2">
                                Género
                            </Text>
                            <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}}
                                  className="text-base">
                                {data.categoria}
                            </Text>
                        </View>
                    )}

                    {data.año && (
                        <View className="mb-4">
                            <Text style={{color: themeColors.foreground, fontFamily: 'HankenGrotesk-SemiBold'}}
                                  className="text-lg mb-2">
                                Año de publicación
                            </Text>
                            <Text style={{color: themeColors.foregroundMuted, fontFamily: 'HankenGrotesk-Regular'}}
                                  className="text-base">
                                {data.año}
                            </Text>
                        </View>
                    )}
                </>
            }
        </View>
    )
}

export default LibroDetalle;
