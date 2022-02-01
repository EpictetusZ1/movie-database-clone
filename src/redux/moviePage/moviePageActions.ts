import {SET_MOVIES} from "./moviePageTypes";
import {IMoviePageAction} from "../../types";

export const setMovies = (data: object): IMoviePageAction => {
    return {
        type: SET_MOVIES,
        targetMovie: data
    }
}