// React & Components
import React from 'react';
import RouteSwitch from "./router/RouteSwitch";
import Header from "./components/Header/Header";
import FireSUsers from "./Firebase/FireSUsers";
import {useSelector} from "react-redux";
import {IAppState} from "./redux/appStore/appTypes";
import AddReview from "./components/AddReview/AddReview";

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
