import {IAppState} from "../../types/Main.types";
import {Actions} from "./appActions";
import ActionTypes from "./appTypes";


const initialState = {
    currMovie: 0,
    signedIn: false,
}


const appReducer = (state: IAppState = {currMovie: 0, signedIn: false}, action: Actions ) => {
    switch (action.type) {
        default: return state
        case ActionTypes.SET_CURR_MOVIE:
            return {
                ...state,
                currMovie: action.payload
            }
        case ActionTypes.SET_USER_STATE:
            return {
                ...state,
                user: {
                    user_id: action.payload
                }
            }
    }
}


export default appReducer