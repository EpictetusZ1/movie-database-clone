import React from 'react';
import * as S from "./ProfilePage.styles"
import {useSelector} from "react-redux";
import {IAppState, IWatchLater} from "../../redux/appStore/appTypes";
import WatchLater from "../WatchLater/WatchLater";

const ProfilePage = () => {

    const user = useSelector((state: IAppState) => state.user)

    return (
        <S.ProfilePage>
            <div className="mainContent">
                <h2>Your Watchlist</h2>
                <hr/>

                <div className="watchlistContainer">
                    {user.watchLater.map((item: IWatchLater) => <WatchLater key={item.id} props={item} />)}
                </div>

            </div>
        </S.ProfilePage>
    );
};

export default ProfilePage;