import {IMoviePageState, IMoviePageAction} from "../../types/Main.types";
import {SET_MOVIES, SET_CURR_MOVIE, SET_CURR_IMDB} from "./moviePageTypes";

const initialState = {
    movieData: {},
    currMovie: 0,
    currIMDB: 0
}

const moviePageReducer = (state: IMoviePageState = initialState, action: IMoviePageAction) => {
    switch (action.type) {
        default:
            return initialState
        case SET_MOVIES:
            return { ...action.targetMovie }
        case SET_CURR_MOVIE:
            return {
                ...state,
                currMovie: action.currMovie
            }
        case SET_CURR_IMDB:
            //TODO: Remove me if I remain unused
            return {
                ...state,
                currIMDB: action.currIMDB
            }
    }
}


export default moviePageReducer