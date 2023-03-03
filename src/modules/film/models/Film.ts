export type Film = {
    id: string,
    genre: string,
    availableDate: string,
    title: string,
    highlighted: boolean,
    rating: number | null,
    poster: string,
    cast: string[],
    thumbnail: string,
    description: string
}

export default function emptyFilm(){
    return {
        id: '',
        genre: '',
        availableDate: '',
        title: '',
        highlighted: '',
        rating: null,
        poster: '',
        cast: [],
        thumbnail: '',
        description: ''
    }
}