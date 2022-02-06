import {ActionTypes, SET_CURR_MOVIE, SET_SIGNED_IN, SET_SIGNED_OUT, SET_USER_DATA} from "./appActions";
import {IAppState} from "./appTypes";

const initialState: IAppState = {
    currMovie: 0,
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
                user: {
                    ...state.user,
                    user_id: action.payload
                }
            }
        case SET_SIGNED_IN:
            return {
                ...state,
                signedIn: true
            }
        case SET_SIGNED_OUT:
            return {
                ...state,
                signedIn: false
            }
    }
}


export default appReducer