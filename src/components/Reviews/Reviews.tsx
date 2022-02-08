import React, {useEffect, useState} from 'react';
import MyFirestore from "../../Firebase/Firestore";
import * as S from "./Reviews.styles"
import {doc, getDoc, setDoc} from "firebase/firestore";
import {useSelector} from "react-redux";
import ReviewItem from "../ReviewItem/ReviewItem";
import {IAppState, IUserReview, TFirebaseReviewResponse} from "../../redux/appStore/appTypes";


const Reviews: React.FC = () => {

    const user = useSelector((state: IAppState) => state.user)
    const movieData = useSelector((state: IAppState) => state)
    const [reviews, setReviews] = useState<IUserReview[]>([])

    const checkReviews = async() => {
        if (user.user_id === "") return []
        const reviewsRef = doc(MyFirestore, "allReviews", `${movieData.currMovie}`)
        const reviewSnapshot = await getDoc(reviewsRef)

        if (!reviewSnapshot.exists()) return []

        // res (if successful) is always an object with 1 property 'movieReviews'
        const convertFireData = (res: any): TFirebaseReviewResponse => {
            return res.movieReviews
        }
        return convertFireData(reviewSnapshot.data())
    }

    useEffect(() => {
        checkReviews()
            .then( (res) => {
                setReviews(res)

            })
            .catch( (e) => {
                console.log(e)
            })
    }, [])

    return (
        <S.Reviews>
            <h2>User Reviews</h2>
            <button className={"addReview"}>
                Add A Review
            </button>
            <div className="reviewContainer">
                {reviews.map((item: IUserReview, index: number) => <ReviewItem key={index} props={item} />)}

            </div>
        </S.Reviews>
    );
};

export default Reviews;