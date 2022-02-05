import ActionTypes from "./appTypes";

interface SetCurrMovie {
 type: ActionTypes.SET_CURR_MOVIE
 payload: number
}

interface SetUserData {
    type: ActionTypes. SET_USER_STATE
    payload: string
}

export type Actions =
    | SetCurrMovie
    | SetUserData


// export const setCurrMovie = (currMovieID: number) => {
//     return {
//         type: SET_CURR_MOVIE,
//         payLoad: {
//             currMovie: currMovieID
//         }
//     }
// }
//
// export const setUserData = (userID: string) => {
//     return {
//         type: SET_USER_STATE,
//         payLoad: {
//             user_id: userID
//         }
//     }
// }

