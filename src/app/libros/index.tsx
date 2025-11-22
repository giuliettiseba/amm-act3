import {FlatList, Image, Pressable, Text, View} from "react-native";
import {Link} from "expo-router";
import {useLibros} from "@/hooks/useLibros";
import {useTheme} from "@/utils/ThemeContext";

const LibrosCatalogo = () => {

    const {libros} = useLibros();
    const {colors} = useTheme();


    return (
        <View style={{backgroundColor: colors.background}} className="justify-center flex-1 p-4">

            <FlatList
                data={libros}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                renderItem={({item}) => (
                    <View className="flex-1 p-2">
                        <Link asChild href={`/libros/${item.id}`}>
                            <Pressable>
                                <View style={{backgroundColor: colors.card}} className="p-2 rounded-lg">
                                    <Image src={item.imagen} className="w-full h-48 mb-2 rounded-lg"/>
                                    <Text style={{color: colors.foreground}} className="font-bold text-base"
                                          numberOfLines={1}>{item.titulo}</Text>
                                    <Text style={{color: colors.foregroundMuted}} className="text-sm"
                                          numberOfLines={1}>{item.autor}</Text>
                                    <Text style={{color: colors.foregroundMuted}} className="text-xs"
                                          numberOfLines={2}>{item.sinopsis}</Text>
                                </View>
                            </Pressable>
                        </Link>
                    </View>
                )}
            >
            </FlatList>
        </View>
    )
}

export default LibrosCatalogo;