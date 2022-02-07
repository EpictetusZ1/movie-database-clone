import {IUserReview} from "./appTypes";

export const SET_CURR_MOVIE = "SET_CURR_MOVIE"
export const SET_USER_DATA = "SET_USER_DATA"
export const SET_SIGNED_OUT = "SET_SIGNED_OUT"
export const SET_USER_REVIEWS = "SET_USER_REVIEWS"
export const ADD_USER_REVIEW = "ADD_USER_REVIEW"
export const SET_USER_WATCH_LATER = "SET_USER_WATCH_LATER"
export const ADD_USER_WATCH_LATER = "ADD_USER_WATCH_LATER"
export const MAP_DB_STATE_TO_REDUX = "MAP_DB_STATE_TO_REDUX"

export type ActionTypes =
    | { type: typeof SET_CURR_MOVIE; payload: number }
    | { type: typeof SET_USER_DATA; payload: string }
    | { type: typeof SET_SIGNED_OUT}
    | { type: typeof SET_USER_REVIEWS; payload: Array<IUserReview>}
    | { type: typeof SET_USER_WATCH_LATER; payload: number[]}
    | { type: typeof ADD_USER_REVIEW; payload: IUserReview}
    | { type: typeof ADD_USER_WATCH_LATER; payload: number}
    | { type: typeof MAP_DB_STATE_TO_REDUX; payload: {
        watchLater: number[],
        reviews: Array<IUserReview>
    }}

export const setCurrMovie = (currMovieID: number): ActionTypes => ({
    type: SET_CURR_MOVIE,
    payload: currMovieID
})

export const setUserData = (user_id: string): ActionTypes => ({
    type: SET_USER_DATA,
    payload: user_id
})

export const setSignedOut = (): ActionTypes => ({
    type: SET_SIGNED_OUT
})

export const setUserReviews = (reviews: Array<IUserReview>): ActionTypes => ({
    type: SET_USER_REVIEWS,
    payload: reviews
})

export const setUserWatchLater = (watchLater: number[]): ActionTypes => ({
    type: SET_USER_WATCH_LATER,
    payload: watchLater
})

export const addUserReview = (review: IUserReview): ActionTypes => ({
    type: ADD_USER_REVIEW,
    payload: review
})

export const addUserWatchLater = (movie: number ): ActionTypes => ({
    type: ADD_USER_WATCH_LATER,
    payload: movie
})

export const mapDBStateToRedux = (watchLater: number[], reviews: Array<IUserReview>): ActionTypes => ({
    type: MAP_DB_STATE_TO_REDUX,
    payload: {
        watchLater: watchLater,
        reviews: reviews
    }
})

