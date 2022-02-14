// React
import React, {useEffect, useState} from "react";

// Styles & Assets
import * as S from "./ReviewItem.styles"
import goldStar from "../../assets/svgs/goldStar.svg"

// Redux & Types
import {IAppState, IReviewItemProps, IUserReview} from "../../redux/appStore/appTypes";
import {useDispatch, useSelector} from "react-redux";
import {toggleShowReview, updateReview} from "../../redux/appStore/appActions";


const ReviewItem: React.FC<IReviewItemProps> = ({props}) => {

    const appState = useSelector((state: IAppState) => state)
    const { isOwner, reviewHeadline, rating, reviewContent, _ownerRef, reviewID } = props

    const [canEdit, setCanEdit] = useState<boolean>(isOwner)
    const dispatch = useDispatch()

    const checkOwnership = () => {
        if (_ownerRef === appState.user.user_id) {
            setCanEdit(true)
        }
    }

    const formatNewReview: IUserReview = {
        isOwner: false,
        reviewID: reviewID,
        reviewHeadline: reviewHeadline,
        rating: rating,
        reviewContent: reviewContent,
        _ownerRef: appState.user.user_id
    }

    useEffect(() => {
        checkOwnership()
    }, [])

    return (
        <S.ReviewItem>
            { canEdit &&
                <button className={"editBtn"}
                        onClick={() => {
                            dispatch(updateReview(formatNewReview))
                            dispatch(toggleShowReview())
                        }}
                >
                    Edit Review
                </button>
            }
            <div className="reviewHeader">
                <div className="ratingContainer">
                    <img src={goldStar} alt="gold star" className="goldStar"/>
                    <p>{rating} /10</p>
                </div>
                <p className={"reviewHeadline"}>{reviewHeadline}</p>
            </div>

            <div className="reviewContent">
                {reviewContent}
            </div>
        </S.ReviewItem>
    )
}

export default ReviewItem