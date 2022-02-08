import {ICurrMovie, IUserReview, IWatchLater} from "./appTypes";

export const SET_CURR_MOVIE = "SET_CURR_MOVIE"
export const SET_CURR_MOVIE_ID = "SET_CURR_MOVIE_ID"
export const SET_USER_DATA = "SET_USER_DATA"
export const SET_SIGNED_OUT = "SET_SIGNED_OUT"
export const SET_USER_REVIEWS = "SET_USER_REVIEWS"
export const ADD_USER_REVIEW = "ADD_USER_REVIEW"
export const SET_USER_WATCH_LATER = "SET_USER_WATCH_LATER"
export const ADD_USER_WATCH_LATER = "ADD_USER_WATCH_LATER"
export const MAP_DB_STATE_TO_REDUX = "MAP_DB_STATE_TO_REDUX"
export const REMOVE_WATCH_LATER_ITEM = "REMOVE_WATCH_LATER_ITEM"
export const TOGGLE_SHOW_REVIEW = "SHOW_ADD_REVIEW"


export type ActionTypes =
    | { type: typeof SET_CURR_MOVIE; payload: ICurrMovie }
    | { type: typeof SET_CURR_MOVIE_ID; payload: number }
    | { type: typeof SET_USER_DATA; payload: string }
    | { type: typeof SET_SIGNED_OUT}
    | { type: typeof SET_USER_REVIEWS; payload: IUserReview[]}
    | { type: typeof SET_USER_WATCH_LATER; payload: IWatchLater[]}
    | { type: typeof ADD_USER_REVIEW; payload: IUserReview}
    | { type: typeof ADD_USER_WATCH_LATER; payload: IWatchLater}
    | { type: typeof MAP_DB_STATE_TO_REDUX; payload: {
        watchLater: IWatchLater[]
        reviews: IUserReview[]
    }}
    | { type: typeof REMOVE_WATCH_LATER_ITEM; payload: number }
    | { type: typeof TOGGLE_SHOW_REVIEW}


export const setCurrMovie = (currMovie: ICurrMovie): ActionTypes => ({
    type: SET_CURR_MOVIE,
    payload: currMovie
})

export const setCurrMovieID = (currMovieId: number): ActionTypes => ({
    type: SET_CURR_MOVIE_ID,
    payload: currMovieId
})

export const setUserData = (user_id: string): ActionTypes => ({
    type: SET_USER_DATA,
    payload: user_id
})

export const setSignedOut = (): ActionTypes => ({
    type: SET_SIGNED_OUT
})

export const setUserReviews = (reviews: IUserReview[]): ActionTypes => ({
    type: SET_USER_REVIEWS,
    payload: reviews
})

export const setUserWatchLater = (watchLater: IWatchLater[]): ActionTypes => ({
    type: SET_USER_WATCH_LATER,
    payload: watchLater
})

export const addUserReview = (review: IUserReview): ActionTypes => ({
    type: ADD_USER_REVIEW,
    payload: review
})

export const addUserWatchLater = (movie: IWatchLater): ActionTypes => ({
    type: ADD_USER_WATCH_LATER,
    payload: movie
})

export const mapDBStateToRedux = (watchLater: IWatchLater[], reviews: IUserReview[]): ActionTypes => ({
    type: MAP_DB_STATE_TO_REDUX,
    payload: {
        watchLater: watchLater,
        reviews: reviews
    }
})

export const removeWatchLaterItem = (item_id: number): ActionTypes => ({
    type: REMOVE_WATCH_LATER_ITEM,
    payload: item_id
})

export const toggleShowReview = (): ActionTypes => ({
    type: TOGGLE_SHOW_REVIEW
})

