// React & Components
import React, {useEffect, useState} from 'react';
import Carousel from "../Carousel/Carousel";

import * as S from "./Main.styles"
import {useDispatch, useSelector} from "react-redux";
import iconSmall from "../../assets/svgs/image-icon-small.svg"
import {IMoviePageState, IPopularResult} from "../../types/types";

const Main: React.FC = () => {

    const dispatchMovie = useDispatch()
    const [previewData, setPreviewData] = useState<IPopularResult[]>([])

    const heroMovie = {
        movieID: 370172,
        movieTitle: "No-Time-To-Die"
    }

    const getMovieData = async () => {
        const popular: string = "/movie/popular"
        const url: string = `https://api.themoviedb.org/3${popular}?api_key=${process.env.REACT_APP_MY_API_KEY}`
        const response: Response = await fetch(url)

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

        return response.json()
    }

    useEffect(() => {
        getMovieData()
            .then((r) => {
                setPreviewData(r.results)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    const movieData = useSelector((state: IMoviePageState) => state.movieData)

    return (
        <S.Main>
            <nav>
                <div className="navInner">
                    <img src={iconSmall} alt="Movie Database"/>
                    Menu
                </div>
            </nav>


            <Carousel movieArr={previewData} />

        </S.Main>
    );
};

export default Main;