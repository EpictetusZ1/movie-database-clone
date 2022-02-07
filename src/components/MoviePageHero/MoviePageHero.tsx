import React, {useEffect, useState} from 'react';
import * as S from "./MoviePageHero.styles"
import {IHeroProps, ISecondaryData, ITrailerAPIRespRoot, ITrailerItem} from "../../types/MoviePage.types";
import ticketIcon from "../../assets/svgs/ticketIcon.svg";
import plusIcon from "../../assets/svgs/addIcon.svg";
import starIcon from "../../assets/svgs/starIcon.svg"
import starIconBlue from "../../assets/svgs/starIconBlue.svg"
import metaCriticLogo from "../../assets/svgs/MetacriticLogo.svg"
import {useDispatch} from "react-redux";
import {addUserWatchLater} from "../../redux/appStore/appActions";

const MoviePageHero: React.FC<IHeroProps> = ({props}) => {

    const { movieID, title, release_date, poster_path, runtime, genres, overview, imdb_id} = props
    const [trailer, setTrailer] = useState<string>("")
    const [secondaryState, setSecondaryState] = useState<ISecondaryData>()

    const dispatch = useDispatch()

    useEffect(() => {
        Promise.all([getTrailer(), getSecondaryData()])
            .then((values) => {
                getOfficialTrailer(values[0])
                setSecondaryState(values[1])
            })
            .catch( (e) => {
                console.log(e)
            })
    }, [])

    const getTrailer = async (): Promise<ITrailerAPIRespRoot> => {
        const video: string = `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${process.env.REACT_APP_TMBD_KEY}`
        const trailerRes: Response = await fetch(video)

        if (!trailerRes.ok) throw new Error(`HTTP error! status: ${trailerRes.status}`)

        return trailerRes.json()
    }

    // Get secondary movie info from API 2: The Open Movie Database
    const getSecondaryData = async (): Promise<ISecondaryData> => {
        const url: string = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&i=${imdb_id}`
        const response: Response = await fetch(url)

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

        return response.json()
    }

    const getOfficialTrailer = (data: ITrailerAPIRespRoot) => {
        const checkObjKeys = () => {
            const [official] = data.results.filter((item: ITrailerItem) => item.name === "Official Trailer")
            const [official1] = data.results.filter((item: ITrailerItem) => item.name === "Official Trailer 1")
            const [teaser] = data.results.filter((item: ITrailerItem) => item.name === "Official Teaser")

            if (official) {
                return official
            } else if (official1) {
                return official1
            } else if (teaser) {
                return teaser
            } else {
                return data.results[0]
            }
        }

        const response = checkObjKeys()
        setTrailer(`https://www.youtube.com/embed/${response.key}`)
    }

    const MovieHeader: React.FC = () => {
        const releaseYear = () => {
            let onlyYear
            onlyYear = release_date.match(/[0-9]{4}/)
            return onlyYear
        }

        const getRunTime = () => {
            let hours = Math.floor(runtime / 60)
            let minutes = runtime % 60
            return `${hours}h ${minutes}m`
        }

        return (
            <S.HeroHeader>
                <div className={"titleContainer"}>
                    <h1>{title}</h1>
                    <ul>
                        <li>{releaseYear()}</li>
                        <li><span>{secondaryState?.Rated}</span></li>
                        <li><span>{getRunTime()}</span></li>
                    </ul>
                </div>
                <div className="popularityContainer">
                    <div className="imdbRating rating">
                        <p className="popularCat">
                            IMDb RATING
                        </p>
                        <img src={starIcon} alt="imdb rating"/>
                        <div className="ratingValue">
                            <p className="value">{secondaryState?.imdbRating}</p>&nbsp;
                            <p className={"outOf"}> / 10</p>
                        </div>
                    </div>
                    <div className="yourRating rating">
                        <p className="popularCat">
                            YOUR RATING
                        </p>
                        <div className="personalRatingContainer">

                            <img src={starIconBlue} alt="add your rating"/>
                            <div className="ratingValue rateNow">Rate</div>
                        </div>

                    </div>
                    <div className="imdbRating rating">
                        <p className="popularCat">
                            METACRITIC
                        </p>
                        <img src={metaCriticLogo} alt="Metacritic" className={"metaIcon"}/>
                        <div className="ratingValue">
                            <p className="value">{secondaryState?.Metascore}</p>&nbsp;
                            <p className={"outOf"}>/ 100</p>
                        </div>
                    </div>
                </div>
            </S.HeroHeader>

        )
    }

    const SecondaryData: React.FC = () => {
        return (
            <S.SecondaryData>
                <div className={"dataSection"}>
                    <p className={"jobTitle"}>Director</p>
                    <p className={"personName"}>{secondaryState?.Director}</p>
                </div>
                <div className={"dataSection"}>
                    <p className={"jobTitle"}>Writers</p>
                    <p className={"personName"}>{secondaryState?.Writer}</p>
                </div>
                <div className={"dataSection"}>
                    <p className={"jobTitle"}>Stars</p>
                    <p className={"personName"}>{secondaryState?.Actors}</p>
                </div>
            </S.SecondaryData>
        )
    }

    return (
        <S.MoviePageHero>
            <MovieHeader />
            <div className={"mediaContainer"}>

                <div className={"posterContainer"}>
                    <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt=""/>

                </div>
                <iframe title={title}
                        src={trailer}
                        frameBorder="0">
                </iframe>
            </div>
            <div className="tags">
                <ul>
                    {genres.map((item) => <li key={item.name}>{item.name}</li>)}
                </ul>
            </div>
            <div className="heroBottomCont">
                <div className={"overView"}>
                    {overview}
                </div>

                <div className="ctaCont">
                    <button className="showtime"><img src={ticketIcon} alt="tickets"/><span><b>See Showtimes</b> <br/> and tickets</span></button>
                    <div onClick={() => dispatch(addUserWatchLater({
                        id: movieID,
                        title: title,
                        poster_path: poster_path,
                        overview: overview,
                        release_date: release_date
                    }))}
                        className="watchlistHero">
                        <img src={plusIcon} alt="add to watchlist"/>
                        Add to Watchlist
                    </div>
                </div>
            </div>

            <SecondaryData />
        </S.MoviePageHero>
    )
}

export default MoviePageHero;