import React from 'react';
import * as S from "./WatchLater.styles"
import {IWatchLaterProps} from "../../types/ProfilePage.types";
import {Link} from "react-router-dom";
import {removeWatchLaterItem, setCurrMovie} from "../../redux/appStore/appActions";
import {useDispatch} from "react-redux";
import starIcon from "../../assets/svgs/starIcon.svg"

const WatchLater: React.FC<IWatchLaterProps> = ({props}) => {

    const {id, title, poster_path, overview, release_date, vote_rating} = props
    const dispatch = useDispatch()

    const cleanTitle = (text: string): string => {
        let cleanText = text.replaceAll(" ", "-")
        cleanText = cleanText.replace(/:/g,"")
        return cleanText
    }

    const handleClick = () => {
        dispatch( setCurrMovie({
            movie_id: id,
            title: title,
            poster: poster_path
        }) )
    }


    return (
        <S.WatchLater>
            <Link to={`/movie/${cleanTitle(title)}`}
                  onClick={() => handleClick()}
            >
                <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt={title} />
            </Link>

            <div className="infoContainer">
                <Link to={`/movie/${cleanTitle(title)}`}
                      onClick={() => handleClick()}
                >
                    <p className={"title"}>{title}</p>
                </Link>

                <div className="ratingContainer">
                    <img src={starIcon} alt=""/>
                    {vote_rating} /10
                </div>

                <div className="releaseDate">
                    {release_date}
                </div>

                <div className="overview">
                    {overview}
                </div>

                <button className="removeFromWatch"
                        onClick={() => dispatch(removeWatchLaterItem(id))}
                >
                    Remove from watch later
                </button>
            </div>

        </S.WatchLater>
    );
};

export default WatchLater;