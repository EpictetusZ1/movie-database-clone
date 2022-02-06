export const SET_CURR_MOVIE = "SET_CURR_MOVIE"
export const SET_USER_DATA = "SET_USER_DATA"
export const SET_SIGNED_IN = "SET_SIGNED_IN"
export const SET_SIGNED_OUT = "SET_SIGNED_OUT"

export type ActionTypes =
    | { type: typeof SET_CURR_MOVIE; payload: number }
    | { type: typeof SET_USER_DATA; payload: string }
    | { type: typeof SET_SIGNED_IN; }
    | {type: typeof  SET_SIGNED_OUT}

export const setCurrMovie = (currMovieID: number): ActionTypes => ({
    type: SET_CURR_MOVIE,
    payload: currMovieID
})

export const setUserData = (user_id: string): ActionTypes => ({
    type: SET_USER_DATA,
    payload: user_id
})

export const setSignedIn = (): ActionTypes => ({
    type: SET_SIGNED_IN
})

export const setSignedOut = (): ActionTypes => ({
    type: SET_SIGNED_OUT
})

