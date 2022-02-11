import {
    ActionTypes,
    ADD_USER_WATCH_LATER,
    CLEAR_CURR_REVIEWS,
    MAP_DB_STATE_TO_REDUX,
    REMOVE_WATCH_LATER_ITEM,
    SET_CURR_MOVIE,
    SET_CURR_REVIEWS,
    SET_MOVIE_REVIEWS_FIRE,
    SET_SIGNED_OUT,
    SET_USER_DATA,
    SET_USER_WATCH_LATER,
    TOGGLE_SHOW_REVIEW
} from "./appActions";
import {IAppState, IUserReview, IWatchLater} from "./appTypes";
import {doc, setDoc} from "firebase/firestore";
import MyFirestore from "../../Firebase/Firestore";

const initialState: IAppState = {
    currMovie: {
        movie_id: 0,
        title: "",
        poster: ""
    },
    currReviews: [],
    newReview: {
        isOwner: false,
        reviewID: "",
        reviewHeadline: "",
        rating: 0,
        reviewContent: "",
        _ownerRef: ""
    },
    signedIn: false,
    addReviewVisible: false,
    user: {
        user_id: "guest",
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
                currMovie: {
                    movie_id: action.payload.movie_id,
                    title: action.payload.title,
                    poster: action.payload.poster
                }
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
        case SET_CURR_REVIEWS:
            return {
                ...state,
                currReviews: state.currReviews.concat(action.payload)
            }
        case CLEAR_CURR_REVIEWS:
            return {
                ...state,
                currReviews: []
            }
        case SET_MOVIE_REVIEWS_FIRE:
            const addReviewID = () => {
                return {
                    ...action.payload,
                    reviewID: "id_" + Math.random().toString(12).slice(3)
                }
            }

            const updateFireReviews = async() => {
                const reviewsRef = doc(MyFirestore, "allReviews", `${state.currMovie.movie_id}`)
                await setDoc(reviewsRef,{
                    movieReviews: state.currReviews.concat(addReviewID())
                })
            }

            updateFireReviews()
            return {
                ...state,
                currReviews: state.currReviews.concat(action.payload)
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
        case MAP_DB_STATE_TO_REDUX:
            return {
                ...state,
                user: {
                    ...state.user,
                    reviews: action.payload.reviews,
                    watchLater: action.payload.watchLater
                }
            }
        case REMOVE_WATCH_LATER_ITEM:
            const watchLaterItems = state.user.watchLater
            const watchLaterClean = watchLaterItems.filter((item: IWatchLater) => item.id !== action.payload)
            return {
                ...state,
                user: {
                    ...state.user,
                    watchLater: watchLaterClean
                }
            }
        case TOGGLE_SHOW_REVIEW:
            return {
                ...state,
                addReviewVisible: !state.addReviewVisible
            }
    }
}


export default appReducer