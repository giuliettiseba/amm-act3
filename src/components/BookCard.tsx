import {Image, Pressable, Text, View} from "react-native";
import {Book} from "@/types/Book";
import {useTheme} from "@/utils/ThemeContext";
import {useRouter} from "expo-router";

const BookCard = (book: Book) => {

    const {colors} = useTheme();
    const router = useRouter();


    return(

        <View className="flex-1 p-2">
            <Pressable
                onPress={() => router.push(`/libros/${book.id}`)}
            >
                <View style={{backgroundColor: colors.card}} className="p-2 rounded-lg">
                    <Image src={book.imagen} className="w-full h-48 mb-2 rounded-lg"/>
                    <Text style={{color: colors.foreground}} className="font-bold text-base"
                          numberOfLines={1}>{book.titulo}</Text>
                    <Text style={{color: colors.foregroundMuted}} className="text-sm"
                          numberOfLines={1}>{book.autor}</Text>
                    <Text style={{color: colors.foregroundMuted}} className="text-xs"
                          numberOfLines={2}>{book.sinopsis}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default BookCard;