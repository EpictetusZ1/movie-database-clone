import React, {useRef, useState} from 'react';
import * as S from "./AddReview.styles"
import {useSelector, useDispatch} from "react-redux";
import {IAppState} from "../../redux/appStore/appTypes";
import emptyStar from "../../assets/svgs/emptyStar.svg"
import blueStar from "../../assets/svgs/blueStar.svg"

const AddReview = () => {

    const movieData = useSelector((state: IAppState) => state.currMovie)
    const dispatch = useDispatch()
    const [mousePos, setMousePos] = useState<number>(0)
    const [rating, setRating] = useState<number>(0)

    const reviewRef = useRef<HTMLDivElement>(null)

    const getCoords = (e: React.MouseEvent) => {
        if (reviewRef.current) {
            const boundRect = reviewRef.current.getBoundingClientRect()
            const x =  e.clientX - boundRect.left
            const width = reviewRef.current.offsetWidth
            const relX = ((x / width) * 1000).toFixed(2)
            setMousePos(parseInt(relX))
        }
    }

    const correlateRatingVal = (e: React.MouseEvent<HTMLImageElement>) => {
        const value = parseInt(e.currentTarget.alt)
        setRating(value)
    }

    // 'limit' is the relative coord for the container at which to display the background as blue
    const dynamicRatingBg = (limit: number): string => {
        if (mousePos >= limit) return blueStar
        return emptyStar
    }

    return (
        <S.ScreenOverlay>
            <S.AddReview>
                <div className="addHeader">
                    <p>{movieData.title}</p>
                    <hr className={"hrSmall"}/>
                    <p>Add a Review</p>
                    <hr className={"hrBold"}/>
                    <p className="yourReview">
                        YOUR RATING
                    </p>
                </div>

                <div className="yourRatingCont">
                    <S.ReviewSliderContainer
                        ref={reviewRef}
                        onMouseMove={(e) => getCoords(e)}
                    >
                        <img src={dynamicRatingBg(80)} alt="1"
                             onClick={(e) => correlateRatingVal(e)}
                        />
                        <img src={dynamicRatingBg(160)} alt="2"
                             onClick={(e) => correlateRatingVal(e)}
                        />
                        <img src={dynamicRatingBg(250)} alt="3"
                             onClick={(e) => correlateRatingVal(e)}
                        />
                        <img src={dynamicRatingBg(340)} alt="4"
                             onClick={(e) => correlateRatingVal(e)}
                        />
                        <img src={dynamicRatingBg(420)} alt="5"
                             onClick={(e) => correlateRatingVal(e)}
                        />
                        <img src={dynamicRatingBg(500)} alt="6"
                             onClick={(e) => correlateRatingVal(e)}
                        />
                        <img src={dynamicRatingBg(585)} alt="7"
                             onClick={(e) => correlateRatingVal(e)}
                        />
                        <img src={dynamicRatingBg(680)} alt="8"
                             onClick={(e) => correlateRatingVal(e)}
                        />
                        <img src={dynamicRatingBg(770)} alt="9"
                             onClick={(e) => correlateRatingVal(e)}
                        />
                        <img src={dynamicRatingBg(870)} alt="10"
                             onClick={(e) => correlateRatingVal(e)}
                        />
                        <p>{rating}</p>
                    </S.ReviewSliderContainer>
                </div>
            </S.AddReview>
        </S.ScreenOverlay>
    );
};

export default AddReview;