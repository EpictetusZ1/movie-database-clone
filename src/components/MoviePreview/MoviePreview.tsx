// React
import React from 'react';

// Styles & Assets
import * as S from "./MoviePreview.styles"
import starIcon from "../../assets/svgs/starIcon.svg"
import ribbon from "../../assets/svgs/ribbonIcon.svg"
import addIcon from "../../assets/svgs/addIcon.svg"
import addIconBlue from "../../assets/svgs/addIconBlue.svg"
import trailerIcon from "../../assets/svgs/trailerIcon.svg"
import infoIcon from "../../assets/svgs/infoIcon.svg"

// Redux, Types & React Router DOM
import {IPreviewProps} from "../../types/Main.types";
import {useDispatch} from "react-redux";
import {addUserWatchLater, setCurrMovie} from "../../redux/appStore/appActions";
import {Link} from "react-router-dom";

const MoviePreview: React.FC<IPreviewProps> = ({movieInfo}) => {

    const cleanTitle = (text: string): string => {
        let cleanText = text.replaceAll(" ", "-")
        cleanText = cleanText.replace(/:/g,"")
        return cleanText
    }

    const image = `https://image.tmdb.org/t/p/w154/${movieInfo.poster_path}`
    const cleanedTitle = cleanTitle(movieInfo.title)

    const dispatch = useDispatch()

    return (
        <S.PreviewWrapper>
            <div className="watchListAdd">
                <div onClick={() => dispatch(addUserWatchLater({
                    id: movieInfo.id,
                    title: movieInfo.title,
                    poster_path: movieInfo.poster_path,
                    overview: movieInfo.overview,
                    release_date: movieInfo.release_date,
                    vote_rating: movieInfo.vote_average
                }))}
                    className="ribbonContainer">
                    <img src={ribbon} className="ribbon" alt="add to watchlist"/>
                    <img src={addIcon} className="addIcon" alt="add to watchlist"/>
                </div>

            </div>
            <S.PreviewImage
                onClick={() => {
                    dispatch( setCurrMovie({
                        movie_id: movieInfo.id,
                        title: movieInfo.title,
                        poster: movieInfo.poster_path
                    }) )
                }}
            >
                <Link to={`movie/${cleanedTitle}`}>
                    <img src={image} alt={movieInfo.title}/>
                </Link>
            </S.PreviewImage>

            <S.MoviePreview>
                <div className="previewInfo">
                    <div className="ratingContainer">
                        <img src={starIcon} alt="rating" />
                        <p className="rating">{movieInfo.vote_average}</p>
                    </div>

                    <p className="movieTitle">{movieInfo.title}</p>

                    <S.ActionsContainer>
                        <S.AddWatchlistBtn onClick={() => dispatch(addUserWatchLater({
                            id: movieInfo.id,
                            title: movieInfo.title,
                            poster_path: movieInfo.poster_path,
                            overview: movieInfo.overview,
                            release_date: movieInfo.release_date,
                            vote_rating: movieInfo.vote_average
                        }))}>
                            <img src={addIconBlue} alt="add to watchlist"/>
                            Watchlist
                        </S.AddWatchlistBtn>

                        <div className="bottomActions">
                            <div className="trailer">
                                <img src={trailerIcon} alt="watch trailer now"/>
                                <p>Trailer</p>
                            </div>
                            <img src={infoIcon} alt="movie information"/>
                        </div>
                    </S.ActionsContainer>
                </div>
            </S.MoviePreview>
        </S.PreviewWrapper>
    );
};

export default MoviePreview;