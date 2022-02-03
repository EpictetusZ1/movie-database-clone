import React, {useEffect, useState} from 'react';
import * as S from "./MoviePage.styles"
import {IMoviePageState, ISingleMovieRoot} from "../../types/types";
import {useSelector } from "react-redux";
import ticketIcon from "../../assets/ticketIcon.svg"
import plusIcon from "../../assets/svgs/addIcon.svg"


const MoviePage: React.FC = () => {

    const movieData = useSelector((state: IMoviePageState) => state.currMovie)
    const [movieMock, setMovieMock] = useState<ISingleMovieRoot>()
    const [trailer, setTrailer] = useState<any>()

    const getData = async (): Promise<ISingleMovieRoot> => {
        const singleMovie: string = `/movie/${movieData}`
        const url: string = `https://api.themoviedb.org/3${singleMovie}?api_key=${process.env.REACT_APP_MY_API_KEY}`
        const response: Response = await fetch(url)

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

        return response.json()
    }

    const getTrailer = async () => {
        const video: string = `https://api.themoviedb.org/3/movie/${movieData}/videos?api_key=${process.env.REACT_APP_MY_API_KEY}`
        const trailerRes: Response = await fetch(video)

        if (!trailerRes.ok) throw new Error(`HTTP error! status: ${trailerRes.status}`)

        return trailerRes.json()
    }


    const getOfficialTrailer = (data: any) => {
        // @ts-ignore
        const [official] = data.filter((item: object) => item.name === "Official Trailer")

        setTrailer(`https://www.youtube.com/embed/${official.key}`)
    }

    useEffect(() => {
        getData()
            .then( (r: ISingleMovieRoot) => {
                setMovieMock(r)
            })
            .catch( (e) => {
                console.log(e)
            })
        getTrailer()
            .then( (r) => {
                getOfficialTrailer(r.results)
            })
            .catch( (e) => {
                console.log(e)
            })


    }, [])

    const MovieHeader: React.FC = () => {
        const getTitle = () => {
            let cleanedTitle
            if (movieMock?.release_date) {
                let releaseYear: string =  movieMock.release_date
                cleanedTitle = releaseYear.match(/[0-9]{4}/)
            }
            return cleanedTitle
        }

        const getRunTime = () => {
            let formattedTime

            if (movieMock?.runtime) {
                let hours = Math.floor(movieMock.runtime / 60)
                let minutes = movieMock.runtime % 60
                formattedTime = `${hours}h ${minutes}m`
            }
            return formattedTime
        }
        return (
            <div>
                <h1>{movieMock?.original_title}</h1>
                <ul>
                    <li>{getTitle()}</li>
                    <li>{getRunTime()}</li>
                </ul>
            </div>
        )
    }

    const MoviePageHero: React.FC = () => {
        return (
            <S.MoviePageHero>
                <div className={"mediaContainer"}>

                <div className={"posterContainer"}>
                    <img src={`https://image.tmdb.org/t/p/w342/${movieMock?.poster_path}`} alt=""/>

                </div>
                <iframe title={movieMock?.original_title}
                        src={trailer}
                        frameBorder="0">
                </iframe>
                </div>
                <div className="tags">
                    <ul>
                        {movieMock?.genres.map((item) => <li key={item.name}>{item.name}</li>)}
                    </ul>
                </div>
                <div className="heroBottomCont">
                    <div className={"overView"}>
                        {movieMock?.overview}
                    </div>

                    <div className="ctaCont">
                        <button className="showtime"><img src={ticketIcon} alt="tickets"/><span><b>See Showtimes</b> <br/> and tickets</span></button>
                        <div className="watchlistHero">
                            <img src={plusIcon} alt="add to watchlist"/>
                            Add to Watchlist
                        </div>
                    </div>
                </div>
            </S.MoviePageHero>
        )
    }

    return (
        <S.MoviePage>
            <S.MovieAboveFold>
                <S.MainContent>
                    <MovieHeader />
                    <MoviePageHero />

                </S.MainContent>

            </S.MovieAboveFold>
        </S.MoviePage>
    );
};

export default MoviePage