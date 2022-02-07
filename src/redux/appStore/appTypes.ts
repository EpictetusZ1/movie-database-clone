export interface IUserReview {
    rating: number
    movieRef: number
    reviewContent: string
}

export interface IWatchLater {
    id: number
    title: string
    poster_path: string
    overview: string
    release_date: string
}

export type IUserState = {
    user_id: string
    reviews: IUserReview[]
    watchLater: IWatchLater[]
}

export interface IAppState {
    currMovie: number
    currMovIMDB: number
    signedIn: boolean
    user: IUserState
}