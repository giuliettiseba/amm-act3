import {FlatList, Image, Pressable, Text, View} from "react-native";
import {Link} from "expo-router";
import {useLibros} from "@/hooks/useLibros";

const LibrosCatalogo = () => {

    const {libros} = useLibros();


    return (
        <View className="justify-center flex-1 p-4">

            <FlatList
                data={libros}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                renderItem={({item}) => (
                    <View className="flex-1 p-2">
                        <Link asChild href={`/libros/${item.id}`}>
                            <Pressable>
                                <View className="p-2 bg-dark-primary-foreground rounded-lg">
                                    <Image src={item.imagen} className="w-full h-48 mb-2 rounded-lg"/>
                                    <Text className="text-dark-foreground font-bold text-base"
                                          numberOfLines={1}>{item.titulo}</Text>
                                    <Text className="text-dark-foreground-muted text-sm"
                                          numberOfLines={1}>{item.autor}</Text>
                                    <Text className="text-dark-foreground-muted text-xs"
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