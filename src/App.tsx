// React & Components
import React from 'react';
import Header from "./components/Header/Header";
import AddReview from "./components/AddReview/AddReview";

// React Router DOM
import RouteSwitch from "./router/RouteSwitch";

// Firebase
import FireSUsers from "./firebase/FireSUsers";

// Redux & Types
import {useSelector} from "react-redux";
import {IAppState} from "./redux/appStore/appTypes";


const App = () => {
    const addReviewVisible = useSelector((state: IAppState) => state.addReviewVisible)

    return (
        <div className={"app"}>
            <FireSUsers />
            <RouteSwitch>
                <Header />
                {addReviewVisible && <AddReview />}
            </RouteSwitch>
        </div>
    )
}

export default App;
