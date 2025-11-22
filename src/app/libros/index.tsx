import {ActivityIndicator, Alert, FlatList, View} from "react-native";
import {useTheme} from "@/utils/ThemeContext";
import {useQuery} from "@tanstack/react-query";
import BookCard from "@/components/BookCard";

const LibrosCatalogo = () => {

    const {colors} = useTheme();


    const {isPending, error, data} = useQuery({
        queryKey: ['libro'],
        queryFn: () =>
            fetch('https://mock.apidog.com/m1/1069422-1057565-default/books').then((res) =>
                res.json(),
            ),
    })

    if (error) {
        Alert.alert('Error', 'No se pudieron cargar los libros. Por favor, inténtalo de nuevo más tarde.');
    }

    if (isPending) {
        return (
            <ActivityIndicator size="large"/>
        )
    }

    return (
        <View style={{backgroundColor: colors.background}} className="justify-center flex-1 p-4">

            <FlatList
                data={data}

                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                renderItem={({item}) => (
                    <BookCard {...item} />
                )}>
            </FlatList>
        </View>
    )
}

export default LibrosCatalogo;