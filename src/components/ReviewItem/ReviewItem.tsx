import React, {useEffect, useState} from "react";
import {IAppState, IReviewItemProps} from "../../redux/appStore/appTypes";
import {useSelector} from "react-redux";
import * as S from "./ReviewItem.styles"

const ReviewItem: React.FC<IReviewItemProps> = ({props}) => {
    // This belongs in the area where a user ADDS a review, it is just here for the
    // time being
    const [allowEdit, setAllowEdit] = useState(false)
    const user = useSelector((state: IAppState) => state.user)
    const {isOwner, reviewHeadline, rating, reviewContent, _ownerRef} = props

    const checkOwnership = () => {
        if (_ownerRef === user.user_id) setAllowEdit(true)
    }

    useEffect(() => {
        checkOwnership()
    }, [])

    return (
        <S.ReviewItem>
            <div className="reviewHeader">
                <p className={"reviewHeadline"}>{reviewHeadline}</p>
                { allowEdit &&
                    <button className={"editBtn"}>
                        Edit Review</button> }
            </div>
            {rating} /10
            <br/>
            {reviewContent}
        </S.ReviewItem>
    )
}

export default ReviewItem