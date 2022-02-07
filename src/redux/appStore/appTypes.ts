export interface IUserReview {
    rating: number
    movieRef: number
    reviewContent: string
}

// export interface IWatchLater {
//     // String is IMDb Movie ID, may add OMDB id as well
//     [index: number]: number
// }

export type IUserState = {
    user_id: string
    reviews: IUserReview[]
    watchLater: number[]
}

export interface IAppState {
    currMovie: number
    currMovIMDB: number
    signedIn: boolean
    user: IUserState
}