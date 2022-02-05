import {Genre} from "./Main.types";

export interface IHeroProps {
    props: {
        movieID: number
        imdb_id: string
        title: string
        release_date: string
        poster_path: string
        runtime: number
        genres: Genre[]
        overview: string
    }
}

export interface ITrailerItem {
    iso_639_1: string
    iso_3166_1: string
    name: string
    key: string
    site: string
    size: number
    type: string
    official: boolean
    published_at: Date
    id: string
}

export interface ITrailerAPIRespRoot {
    [index: number]: ITrailerItem
}

export interface Rating {
    Source: string;
    Value: string;
}

export interface ISecondaryData {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}
