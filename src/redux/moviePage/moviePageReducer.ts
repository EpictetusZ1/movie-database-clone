import {IMoviePageState, IMoviePageAction} from "../../types/types";
import { SET_MOVIES } from "./moviePageTypes";

const initialState = {
    movieData: {}
}

const moviePageReducer = (state: IMoviePageState = initialState, action: IMoviePageAction) => {
    switch (action.type) {
        default:
            return initialState
        case SET_MOVIES:
            return { ...action.targetMovie }
    }
}


export default moviePageReducer