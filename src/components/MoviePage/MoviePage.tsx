// React & Components
import React, {useEffect, useState} from 'react';
import MoviePageHero from "../MoviePageHero/MoviePageHero";
import Reviews from "../Reviews/Reviews";

// Styles
import * as S from "./MoviePage.styles"

// Redux & Types
import {useSelector} from "react-redux";
import {ISingleMovieRoot} from "../../types/Main.types";
import {IHeroProps} from "../../types/MoviePage.types";
import {IAppState} from "../../redux/appStore/appTypes";


const MoviePage: React.FC = () => {

    const movieData = useSelector((state: IAppState) => state.currMovie.movie_id)
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
                overview: r.overview,
                vote_rating: r.vote_average
            }
        })
    }

    useEffect(() => {
        getData()
            .then( (r: ISingleMovieRoot) => {
                if (r) populateHeroProps(r)
            })
            .catch( (e) => {
                console.log(e)
            })
    }, [])

    // Get primary movie info from API 1: The Movie Database API
    const getData = async (): Promise<ISingleMovieRoot> => {
        const response: Response = await fetch(`https://api.themoviedb.org/3/movie/${movieData}?api_key=${process.env.REACT_APP_TMBD_KEY}`)
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

        return response.json()
    }

    return (
        <S.MoviePage>
            <S.MovieAboveFold>
                <S.MainContent className={"mainContent"}>
                    {heroProps?.props && <MoviePageHero props={heroProps.props} />}
                </S.MainContent>
            </S.MovieAboveFold>
            <div className="additionalDetails">
                <h1>More</h1>
                <Reviews />
            </div>
        </S.MoviePage>
    );
};

export default MoviePage