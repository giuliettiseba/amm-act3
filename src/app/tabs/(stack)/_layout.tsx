import {Stack} from "expo-router";

export default function LibrosLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="libros/index"
                options={{
                    title: "Catálogo de Libros",
                    headerShown: true
                }}
            />
            <Stack.Screen
                name="libros/detalle/[id]/index"
                options={{
                    title: "Detalle del Libro",
                    headerShown: true
                }}
            />
        </Stack>)
}