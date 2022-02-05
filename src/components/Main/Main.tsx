// React & Components
import React, {useEffect, useState} from 'react';
import Carousel from "../Carousel/Carousel";

import * as S from "./Main.styles"
import {useDispatch} from "react-redux";
import { IMovieArray} from "../../types/Main.types";

const Main: React.FC = () => {

    const dispatchMovie = useDispatch()
    const [popularMovies, setPopularMovies] = useState<IMovieArray[]>([])
    const [topMovies, setTopMovies] = useState<IMovieArray[]>([])

    useEffect(() => {
        Promise.all([getPopularMovies(), getTopMovies()])
            .then((values) => {
                setPopularMovies(values[0].results)
                setTopMovies(values[1].results)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])


    // Array for 1st instance of Carousel.tsx
    const getPopularMovies = async () => {
        const response: Response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMBD_KEY}`)

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

        return response.json()
    }

    // Array for 2nd instance of Carousel.tsx
    const getTopMovies = async () => {
        const response: Response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMBD_KEY}`)

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

        return response.json()
    }

    return (
        <S.Main>
            <br/>
            <br/>
            <Carousel movieArr={popularMovies} title={"Trending Movies"} subTitle={"Fan favourites"}/>
            <br/>
            <br/>
            <Carousel movieArr={topMovies} title={"Featured"} subTitle={"Top Movies"}/>
        </S.Main>
    );
};

export default Main;