import React, {useEffect, useState} from 'react';
import * as S from "./MoviePage.styles"
import {IMoviePageState, ISingleMovieRoot} from "../../types/Main.types";
import {useSelector } from "react-redux";
import {IHeroProps} from "../../types/Hero.types";
import HeroMoviePage from "../HeroMoviePage/HeroMoviePage";


const MoviePage: React.FC = () => {

    const movieData = useSelector((state: IMoviePageState) => state.currMovie)
    const [heroProps, setHeroProps] = useState<IHeroProps>()

    const populateHeroProps = (r: ISingleMovieRoot) => {
        setHeroProps({
            props: {
                movieID: movieData,
                imdb_id: r.imdb_id,
                title: r.title,
                release_date: r.release_date,
                poster_path: r.poster_path,
                runtime: r.runtime,
                genres: r.genres,
                overview: r.overview
            }
        })

    }

    // Get primary movie info from API 1: The Movie Database API
    const getData = async (): Promise<ISingleMovieRoot> => {
        const singleMovie: string = `/movie/${movieData}`
        const url: string = `https://api.themoviedb.org/3${singleMovie}?api_key=${process.env.REACT_APP_TMBD_KEY}`
        const response: Response = await fetch(url)

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

        return response.json()
    }

    useEffect(() => {
        getData()
            .then( (r: ISingleMovieRoot) => {
                populateHeroProps(r)
            })
            .catch( (e) => {
                console.log(e)
            })
    }, [])

    return (
        <S.MoviePage>
            <S.MovieAboveFold>
                <S.MainContent className={"mainContent"}>
                    {heroProps?.props && <HeroMoviePage props={heroProps.props} />}
                </S.MainContent>
            </S.MovieAboveFold>
        </S.MoviePage>
    );
};

export default MoviePage