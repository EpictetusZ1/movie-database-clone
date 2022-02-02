import React from 'react';
import {Link} from "react-router-dom";
import * as S from "./MoviePreview.styles"
import {IPreviewProps} from "../../types/types";
import starIcon from "../../assets/svgs/starIcon.svg"
import ribbon from "../../assets/svgs/ribbonIcon.svg"
import addIcon from "../../assets/svgs/addIcon.svg"
import addIconBlue from "../../assets/svgs/addIconBlue.svg"
import trailerIcon from "../../assets/svgs/trailerIcon.svg"
import infoIcon from "../../assets/svgs/infoIcon.svg"

const MoviePreview: React.FC<IPreviewProps> = ({movieInfo}) => {

    const cleanTitle = (text: string): string => {
        let cleanText = text.replaceAll(" ", "-")
        cleanText = cleanText.replace(/:/g,"")
        return cleanText
    }

    const image = `https://image.tmdb.org/t/p/w154/${movieInfo.poster_path}`
    const data = movieInfo
    const cleanedTitle = cleanTitle(movieInfo.title)


    return (
        <S.PreviewWrapper>
            <div className="watchListAdd">
                <div className="ribbonContainer">
                    <img src={ribbon} className="ribbon" alt="add to watchlist"/>
                    <img src={addIcon} className="addIcon" alt="add to watchlist"/>
                </div>

            </div>
            <S.PreviewImage>
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
                        <S.AddWatchlistBtn>
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