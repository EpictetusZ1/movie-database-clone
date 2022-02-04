// React & Components
import React, {useEffect, useState} from 'react';
import Carousel from "../Carousel/Carousel";

import * as S from "./Main.styles"
import {useDispatch} from "react-redux";
import { IPopularResult} from "../../types/Main.types";

const Main: React.FC = () => {

    const dispatchMovie = useDispatch()
    const [previewData, setPreviewData] = useState<IPopularResult[]>([])

    const getMovieData = async () => {
        const popular: string = "/movie/popular"
        const url: string = `https://api.themoviedb.org/3${popular}?api_key=${process.env.REACT_APP_TMBD_KEY}`
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


    return (
        <S.Main>
            <Carousel movieArr={previewData} />

        </S.Main>
    );
};

export default Main;