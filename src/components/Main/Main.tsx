import React from 'react';
import * as S from "./Main.styles"
import MoviePage from "../MoviePage/MoviePage";
import {useDispatch} from "react-redux";
import {setMovies} from "../../redux";

const Main: React.FC = () => {
    //TODO: Render a list of popular movies, and put their Movie ID's in state so onClick movie preview can fetch the associated data

    const dispatchMovie = useDispatch()

    const heroMovie = {
        movieID: 370172
    }

    const getMovieData = async () => {
        const query: string = `/movie/${heroMovie.movieID}`
        // const moviesPopular = "/moviePage/popular"

        const url: string = `https://api.themoviedb.org/3${query}?api_key=${process.env.REACT_APP_MY_API_KEY}`
        const response: Response = await fetch(url)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        return response.json()
    }


    return (
        <S.Main>
            <div className={"preview"}>
                Movie Preview
                <button
                    onClick={() => {
                        getMovieData()
                            .then( (r) => dispatchMovie(setMovies(r)) )
                            .catch( (e) => {
                                console.log(e)
                            })
                    }}
                >
                    Show Movie</button>

            </div>
            <MoviePage />

        </S.Main>
    );
};

export default Main;