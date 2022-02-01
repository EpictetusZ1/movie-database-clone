import React from 'react';
import * as S from "./MoviePreview.styles"
import {Link} from "react-router-dom";
import {IPreviewProps} from "../../types";

const MoviePreview: React.FC<IPreviewProps> = ({movieInfo}) => {

    const noSpaceTitle = movieInfo.title.replaceAll(' ', '-');
    const image = `https://image.tmdb.org/t/p/w154/${movieInfo.poster_path}`
    const data= movieInfo

    return (
        <S.MoviePreview>
            <Link to={`movie/${noSpaceTitle}`}>
            <img src={image} alt={movieInfo.title}/>
                <p>{movieInfo.title}</p>

            </Link>
        </S.MoviePreview>
    );
};

export default MoviePreview;