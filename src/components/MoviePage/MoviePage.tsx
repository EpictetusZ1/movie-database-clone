import React, {useState} from 'react';
import * as S from "./MoviePage.styles"
import { IMoviePageState } from "../../types/types";
import {useSelector, useDispatch} from "react-redux";

const MoviePage: React.FC = () => {

    const movieData = useSelector((state: IMoviePageState) => state.movieData)
    const dispatchMovie = useDispatch()

    const jamesBond = {
        movieData: {
            id: 777,
            title: "James Bond"
        }
    }


    return (
        <S.MoviePage>
            <h1>Movie page</h1>

        </S.MoviePage>
    );
};

export default MoviePage