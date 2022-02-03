import {IMoviePageState, IMoviePageAction} from "../../types/types";
import { SET_MOVIES, SET_CURR_MOVIE } from "./moviePageTypes";

const initialState = {
    movieData: {},
    currMovie: 0
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
    }
}


export default moviePageReducer