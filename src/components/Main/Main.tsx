// React & Components
import React, {useEffect, useState} from 'react';
import MoviePreview from "../MoviePreview/MoviePreview";

import * as S from "./Main.styles"
import {useDispatch, useSelector} from "react-redux";
import iconSmall from "../../assets/svgs/image-icon-small.svg"
import { IMoviePageState } from "../../types/types";

const Main: React.FC = () => {

    const dispatchMovie = useDispatch()
    const [previewData, setPreviewData] = useState([])

    const heroMovie = {
        movieID: 370172,
        movieTitle: "No-Time-To-Die"
    }

    const getMovieData = async () => {
        const popular: string = "/movie/popular"
        const url: string = `https://api.themoviedb.org/3${popular}?api_key=${process.env.REACT_APP_MY_API_KEY}`
        const response: Response = await fetch(url)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        //TODO: Separate first 5 results into Hero slider
        //TODO: Return 'Error' Movie object so <MoviePreview /> still renders

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
            <h3>Featured today</h3>

            <div className={"previewGrid"}>
                {previewData.map( (item) => <MoviePreview movieInfo={item} /> )}
            </div>
        </S.Main>
    );
};

export default Main;