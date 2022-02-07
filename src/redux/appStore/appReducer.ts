import {
    ActionTypes,
    ADD_USER_REVIEW,
    ADD_USER_WATCH_LATER,
    MAP_DB_STATE_TO_REDUX,
    SET_CURR_MOVIE,
    SET_SIGNED_OUT,
    SET_USER_DATA,
    SET_USER_REVIEWS,
    SET_USER_WATCH_LATER
} from "./appActions";
import {IAppState} from "./appTypes";

const initialState: IAppState = {
    currMovie: 0,
    currMovIMDB: 0,
    signedIn: false,
    user: {
        user_id: "guest",
        reviews: [],
        watchLater: []
    }
}

const appReducer = (state: IAppState = initialState, action: ActionTypes ) => {
    switch (action.type) {
        default:
            return state
        case SET_CURR_MOVIE:
            return {
                ...state,
                currMovie: action.payload
            }
        case SET_USER_DATA:
            return {
                ...state,
                signedIn: true,
                user: {
                    ...state.user,
                    user_id: action.payload
                }
            }
        case SET_SIGNED_OUT:
            return initialState
        case SET_USER_REVIEWS:
            return {
                ...state,
                user: {
                    ...state.user,
                    reviews: action.payload
                }
            }
        case SET_USER_WATCH_LATER:
            return {
                ...state,
                user: {
                    ...state.user,
                    watchLater: action.payload
                }
            }
        case ADD_USER_WATCH_LATER:
            return {
                ...state,
                user: {
                    ...state.user,
                    watchLater: state.user.watchLater.concat(action.payload)
                }
            }
        case ADD_USER_REVIEW:
            return {
                ...state,
                user: {
                    ...state.user,
                    reviews: state.user.reviews.concat(action.payload)
                }
            }
        case MAP_DB_STATE_TO_REDUX:
            return {
                ...state,
                user: {
                    ...state.user,
                    reviews: action.payload.reviews,
                    watchLater: action.payload.watchLater
                }
            }

    }
}


export default appReducer