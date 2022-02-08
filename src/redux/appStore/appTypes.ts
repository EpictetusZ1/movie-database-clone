export interface IUserReview {
    isOwner: boolean
    reviewHeadline: string
    rating: number
    reviewContent: string
    _ownerRef: string
}

export interface IWatchLater {
    id: number
    title: string
    poster_path: string
    overview: string
    release_date: string
    vote_rating: number
}

export type IUserState = {
    user_id: string
    reviews: IUserReview[]
    watchLater: IWatchLater[]
}

export interface ICurrMovie {
    movie_id: number,
    title: string,
    poster: string
}

export interface IAppState {
    currMovie: ICurrMovie
    signedIn: boolean
    user: IUserState
    addReviewVisible: boolean
    currReviews: IUserReview[]
}

export type TFirebaseReviewResponse = IUserReview[]

export interface IReviewItemProps {
   props: IUserReview
}