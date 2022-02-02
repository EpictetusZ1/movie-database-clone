import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviePage from "../components/MoviePage/MoviePage";
import Main from "../components/Main/Main";

const RouteSwitch = () => {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Main />} />
                <Route path={"/movie/:title"} element={<MoviePage />} />
            </Routes>
        </Router>
    )
};

export default RouteSwitch;