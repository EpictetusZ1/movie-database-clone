// React
import React, {useRef, useState} from 'react';

// Styles * Assets
import * as S from "./AddReview.styles"
import emptyStar from "../../assets/svgs/emptyStar.svg"
import blueStar from "../../assets/svgs/blueStar.svg"

// Redux & types
import {useSelector, useDispatch} from "react-redux";
import { setMovieReviewsFire, toggleShowReview } from "../../redux/appStore/appActions";
import {IAppState, IUserReview} from "../../redux/appStore/appTypes";


const AddReview = () => {
    const appState = useSelector((state: IAppState) => state)
    const dispatch = useDispatch()

    const [mousePos, setMousePos] = useState<number>(0)


    const [formPayload, setFormPayload] = useState<IUserReview>(appState.newReview)

    const image = `https://image.tmdb.org/t/p/w154/${appState.currMovie.poster}`

    const reviewRef = useRef<HTMLDivElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        e.preventDefault()
        setFormPayload(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

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
        setFormPayload(prevState => ({
            ...prevState,
            rating: value
        }))

    }

    // 'limit' is the relative coord for the container at which to display the background as blue
    const dynamicRatingBg = (limit: number): string => {
        if (mousePos >= limit) return blueStar
        return emptyStar
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        dispatch(setMovieReviewsFire(formPayload))
        dispatch(toggleShowReview())
    }

    return (
        <S.ScreenOverlay>
            <S.AddReview>
                <div className="movieInfoWrapper">
                    <img src={image} alt={appState.currMovie.title} />
                    <div className="addHeader">
                        <p>{appState.currMovie.title}</p>
                        <p className={"closeAdd"}
                           onClick={() => dispatch(toggleShowReview())}
                        >
                            X
                        </p>
                        <hr className={"hrSmall"}/>
                        <p>Add a Review</p>
                        <hr className={"hrBold"}/>
                        <p className="yourRating">
                            YOUR RATING
                        </p>
                    </div>
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
                        <img src={dynamicRatingBg(850)} alt="10"
                             onClick={(e) => correlateRatingVal(e)}
                        />
                        <p>{formPayload.rating}</p>
                    </S.ReviewSliderContainer>
                </div>
                <div className="yourReview">

                    <p>YOUR REVIEW</p>
                </div>

                    <form autoComplete={"off"}
                          onSubmit={(e) => handleSubmit(e)}
                    >
                        <input type="text"
                               name="reviewHeadline"
                               value={formPayload.reviewHeadline}
                               required={true}
                               onChange={handleChange}
                               placeholder={"Write a headline for your review here"}
                        />
                        <textarea
                            className={"reviewBodyContent"}
                            name="reviewContent"
                            value={formPayload.reviewContent}
                            required={true}
                            onChange={(e) => handleChange(e)}
                            placeholder={"Write your review here"}
                        />
                        <button type="submit" className="submitBtn">Submit</button>
                    </form>
            </S.AddReview>
        </S.ScreenOverlay>
    );
};

export default AddReview;