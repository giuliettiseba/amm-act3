import React from "react";

export function useLibros() {

    const [libros, setLibros] = React.useState<Libro[]>([]);

    React.useEffect(() => {
        async function fetchLibros() {
            try {
                const response = await fetch('https://mock.apidog.com/m1/1069422-1057565-default/books');
                const data: Libro[] = await response.json();
                setLibros(data);
            } catch (error) {
                console.error('Error fetching libros:', error);
            }
        }

        fetchLibros();
    }, []);

    return {libros};


}