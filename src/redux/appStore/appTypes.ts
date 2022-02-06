export interface IUserReview {
    rating: number
    reviewContent: string
}

export interface IWatchLater {
    // String is IMDb Movie ID, may add OMDB id as well
    [index: number]: string
}

export type IUserState = {
    user_id: string
    reviews: IUserReview[] | []
    watchLater: IWatchLater
}

export interface IAppState {
    currMovie: number
    signedIn: boolean
    user: IUserState
}