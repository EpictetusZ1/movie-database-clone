// React & Components
import React, {useEffect} from 'react';
import ReviewItem from "../ReviewItem/ReviewItem";

// Styles
import * as S from "./Reviews.styles"

// Firestore
import MyFirestore from "../../firebase/Firestore";
import {doc, getDoc} from "firebase/firestore";

// Redux & Types
import {useDispatch, useSelector} from "react-redux";
import {IAppState, IUserReview, TFirebaseReviewResponse} from "../../redux/appStore/appTypes";
import {setCurrReviews, clearCurrReviews, toggleShowReview} from "../../redux/appStore/appActions";


const Reviews: React.FC = () => {

    const dispatch = useDispatch()
    const appState = useSelector((state: IAppState) => state)

    const checkReviews = async() => {
        if (appState.user.user_id === "") return []
        const reviewsRef = doc(MyFirestore, "allReviews", `${appState.currMovie.movie_id}`)
        const reviewSnapshot = await getDoc(reviewsRef)

        if (!reviewSnapshot.exists()) return []

        const convertFireData = (res: any): TFirebaseReviewResponse => {
            return res.movieReviews
        }
        return convertFireData(reviewSnapshot.data())
    }

    useEffect(() => {
        checkReviews()
            .then( (res) => {
                dispatch(setCurrReviews(res))
            })
            .catch( (e) => {
                console.log(e)
            })

        return () => {
            dispatch(clearCurrReviews())
        }
    }, [])

    return (
        <S.Reviews>
            <div className="allReviewHeader">
                <h2>User Reviews:</h2>
                <button className={"addReview"}
                        onClick={() => dispatch(toggleShowReview())}
                >
                    Add A Review
                </button>
            </div>

            <div className="reviewContainer">
                {appState.currReviews.map((item: IUserReview) => <ReviewItem key={item.reviewID} props={item} />)}
            </div>
        </S.Reviews>
    );
};

export default Reviews;