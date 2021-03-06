import {ICurrMovie, IUserReview, IWatchLater} from "./appTypes";

export const SET_CURR_MOVIE = "SET_CURR_MOVIE"
export const SET_USER_DATA = "SET_USER_DATA"
export const SET_SIGNED_OUT = "SET_SIGNED_OUT"
export const SET_CURR_REVIEWS = "SET_CURR_REVIEWS"
export const SET_USER_WATCH_LATER = "SET_USER_WATCH_LATER"
export const ADD_USER_WATCH_LATER = "ADD_USER_WATCH_LATER"
export const MAP_DB_STATE_TO_REDUX = "MAP_DB_STATE_TO_REDUX"
export const REMOVE_WATCH_LATER_ITEM = "REMOVE_WATCH_LATER_ITEM"
export const TOGGLE_SHOW_REVIEW = "SHOW_ADD_REVIEW"
export const SET_MOVIE_REVIEWS_FIRE = "SET_MOVIE_REVIEWS_FIRE"
export const CLEAR_CURR_REVIEWS = "CLEAR_CURR_REVIEWS"
export const UPDATE_REVIEW = "UPDATE_REVIEW"


export type ActionTypes =
    | { type: typeof SET_CURR_MOVIE; payload: ICurrMovie }
    | { type: typeof SET_USER_DATA; payload: string }
    | { type: typeof SET_SIGNED_OUT}
    | { type: typeof SET_CURR_REVIEWS; payload: IUserReview[]}
    | { type: typeof SET_USER_WATCH_LATER; payload: IWatchLater[]}
    | { type: typeof ADD_USER_WATCH_LATER; payload: IWatchLater}
    | { type: typeof MAP_DB_STATE_TO_REDUX; payload: {
        watchLater: IWatchLater[]
        reviews: IUserReview[]
    }}
    | { type: typeof REMOVE_WATCH_LATER_ITEM; payload: number }
    | { type: typeof TOGGLE_SHOW_REVIEW }
    | { type: typeof SET_MOVIE_REVIEWS_FIRE; payload: IUserReview }
    | { type: typeof CLEAR_CURR_REVIEWS;}
    | { type: typeof UPDATE_REVIEW; payload: IUserReview }



export const setCurrMovie = (currMovie: ICurrMovie): ActionTypes => ({
    type: SET_CURR_MOVIE,
    payload: currMovie
})


export const setUserData = (user_id: string): ActionTypes => ({type: SET_USER_DATA,
    payload: user_id
})

export const setSignedOut = (): ActionTypes => ({
    type: SET_SIGNED_OUT
})

export const setCurrReviews = (reviews: IUserReview[]): ActionTypes => ({
    type: SET_CURR_REVIEWS,
    payload: reviews
})

export const clearCurrReviews = (): ActionTypes => ({
    type: CLEAR_CURR_REVIEWS
})

export const setMovieReviewsFire = (reviewData: IUserReview): ActionTypes => ({
    type: SET_MOVIE_REVIEWS_FIRE,
    payload: reviewData
})

export const updateReview = (reviewData: IUserReview): ActionTypes => ({
    type: UPDATE_REVIEW,
    payload: reviewData
})

export const setUserWatchLater = (watchLater: IWatchLater[]): ActionTypes => ({
    type: SET_USER_WATCH_LATER,
    payload: watchLater
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

