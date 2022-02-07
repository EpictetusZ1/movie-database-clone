import React from 'react';
import * as S from "./WatchLater.styles"
import {IWatchLaterProps} from "../../types/ProfilePage.types";
import {Link} from "react-router-dom";
import {removeWatchLaterItem, setCurrMovie} from "../../redux/appStore/appActions";
import {useDispatch} from "react-redux";

const WatchLater: React.FC<IWatchLaterProps> = ({props}) => {

    const {id, title, poster_path, overview, release_date} = props

    const dispatch = useDispatch()
    return (
        <S.WatchLater>
            <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt={title} />

            <div className="infoContainer">
                <Link to={`/movie/${title}`}
                      onClick={() => dispatch( setCurrMovie(id) )}
                >
                    <p className={"title"}>{title}</p>
                </Link>

                <div className="releaseDate">
                    {release_date}
                </div>

                <div className="overview">
                    {overview}
                </div>

                <button className="removeFromWatch"
                        onClick={() => dispatch(removeWatchLaterItem(id))}
                >
                    Remove movie
                </button>
            </div>

        </S.WatchLater>
    );
};

export default WatchLater;