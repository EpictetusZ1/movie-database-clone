import {SET_CURR_MOVIE, SET_MOVIES, SET_CURR_IMDB} from "./moviePageTypes";
import {IMoviePageAction} from "../../types/Main.types";

export const setMovies = (data: object): IMoviePageAction => {
    return {
        type: SET_MOVIES,
        targetMovie: data
    }
}

export const setCurrMovie = (currMovieID: number): IMoviePageAction => {
    return {
        type: SET_CURR_MOVIE,
        currMovie: currMovieID
    }
}

export const setCurrIMDB = (currIMDBID: number): IMoviePageAction => {
    return {
        type: SET_CURR_IMDB,
        currIMDB: currIMDBID
    }
}
