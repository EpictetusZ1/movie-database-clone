import {IUserState} from "../../types/Main.types";

// export interface IAppState {
//     currMovie: number
//     signedIn: boolean
//     user?: IUserState
// }


enum ActionTypes {
    SET_CURR_MOVIE = "SET_CURR_MOVIE",
    SET_USER_STATE = "SET_USER_STATE"
}

export default ActionTypes