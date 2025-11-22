// noinspection JSNonASCIINames,NonAsciiCharacters

export interface Book {
    id: string;
    titulo: string;
    autor: string;
    sinopsis?: string;
    categoria?: string;
    precio: number;
    imagen?: string;
    año?: number;
}

