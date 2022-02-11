import React, {useEffect, useState} from "react";
import {IAppState, IReviewItemProps} from "../../redux/appStore/appTypes";
import {useSelector} from "react-redux";
import * as S from "./ReviewItem.styles"

const ReviewItem: React.FC<IReviewItemProps> = ({props}) => {

    const appState = useSelector((state: IAppState) => state)
    const { isOwner, reviewHeadline, rating, reviewContent, _ownerRef} = props

    const [canEdit, setCanEdit] = useState<boolean>(isOwner)

    const checkOwnership = () => {
        if (_ownerRef === appState.user.user_id) {
            setCanEdit(true)
        }
    }

    useEffect(() => {
        checkOwnership()
    }, [])

    return (
        <S.ReviewItem>
            <div className="reviewHeader">
                <p className={"reviewHeadline"}>{reviewHeadline}</p>
                { canEdit && <button className={"editBtn"}>
                    Edit Review
                </button>}

            </div>
            {rating} /10
            <br/>
            {reviewContent}
        </S.ReviewItem>
    )
}

export default ReviewItem