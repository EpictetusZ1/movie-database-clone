import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviePage from "../components/MoviePage/MoviePage";
import Main from "../components/Main/Main";
import React from "react";
import {RouteProps} from "../types/Main.types";
import ProfilePage from "../components/ProfilePage/ProfilePage";


const RouteSwitch: React.FC<RouteProps> = ({children}) => {
    return (
        <Router>
            {children}
            <Routes>
                <Route path={"/"} element={<Main />} />
                <Route path={"/movie/:title"} element={<MoviePage />} />
                <Route path={"/profile"} element={<ProfilePage />} />
            </Routes>
        </Router>
    )
};

export default RouteSwitch;