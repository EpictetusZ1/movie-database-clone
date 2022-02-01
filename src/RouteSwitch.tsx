import { BrowserRouter as Router,Route, Routes, Link } from "react-router-dom";
import App from "./App";

const RouteSwitch = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </Router>
    )
};

export default RouteSwitch;