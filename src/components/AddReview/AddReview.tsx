import React from 'react';
import * as S from "./AddReview.styles"
import {useSelector} from "react-redux";
import {IAppState} from "../../redux/appStore/appTypes";
import emptyStar from "../../assets/svgs/emptyStar.svg"

const AddReview = () => {

    const movieData = useSelector((state: IAppState) => state.currMovie)

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

                <S.ReviewSliderContainer>
                    <img src={emptyStar} alt="One Star"/>
                    <img src={emptyStar} alt="Two Star"/>
                    <img src={emptyStar} alt="Three Star"/>
                    <img src={emptyStar} alt="Four Star"/>
                    <img src={emptyStar} alt="Five Star"/>
                    <img src={emptyStar} alt="Six Star"/>
                    <img src={emptyStar} alt="Seven Star"/>
                    <img src={emptyStar} alt="Eight Star"/>
                    <img src={emptyStar} alt="Nine Star"/>
                    <img src={emptyStar} alt="Ten Star"/>
                </S.ReviewSliderContainer>



            </S.AddReview>


        </S.ScreenOverlay>
    );
};

export default AddReview;