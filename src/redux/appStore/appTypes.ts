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

export interface IAppState {
    currMovie: number
    signedIn: boolean
    user: IUserState
    currReviews: IUserReview[]
}

export type TFirebaseReviewResponse = IUserReview[]

export interface IReviewItemProps {
   props: IUserReview
}