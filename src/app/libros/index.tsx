import {ActivityIndicator, FlatList, View} from "react-native";
import {useTheme} from "@/contexts/ThemeContext";
import BookCard from "@/components/BookCard";
import {LIBROS_ENDPOINT} from "@/utils/constants";
import useApiClient from "@/hooks/useApiClient";
import {ErrorMessage} from "@/components/ErrorMessage";
import {hapticFeedback} from "@/utils/nexus_hapatics";
import {Book} from "@/types/Book";


const LibrosCatalogo = () => {

    const {themeColors} = useTheme();
    const {isPending, error, data} = useApiClient<Book[]>(
        LIBROS_ENDPOINT, ["libros"]);

    const handleScroll = async (event: { nativeEvent: { contentOffset: { y: any; }; }; }) => {
        const scrollY = event.nativeEvent.contentOffset.y;
        if (Math.round(scrollY) % 10 === 0) {
            await hapticFeedback('light');
        }
    }

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
                <FlatList
                    data={data}
                    onScroll={handleScroll}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    renderItem={({item}) => (
                        <BookCard {...item} />
                    )}/>
            }
        </View>
    )

}

export default LibrosCatalogo;