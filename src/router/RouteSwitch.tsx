import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import MoviePage from "../components/MoviePage/MoviePage";
import Main from "../components/Main/Main";
import React, {useEffect} from "react";
import {RouteProps} from "../types/Main.types";
import ProfilePage from "../components/ProfilePage/ProfilePage";


const RouteSwitch: React.FC<RouteProps> = ({children}) => {

    const ScrollToTop: React.FC = () => {
        const location = useLocation()
        useEffect(() => {
            window.scrollTo(0, 0)
        }, [location])
        return (
            <>
            </>
        )
    }

    return (
        <Router>
            {children}
            <ScrollToTop />
            <Routes>
                <Route path={"/"} element={<Main />} />
                <Route path={"/movie/:title"} element={<MoviePage />} />
                <Route path={"/profile"} element={<ProfilePage />} />
            </Routes>
        </Router>
    )
};

export default RouteSwitch;