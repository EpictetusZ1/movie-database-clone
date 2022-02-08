// React & Components
import React from 'react';
import RouteSwitch from "./router/RouteSwitch";
import Header from "./components/Header/Header";
import FireSUsers from "./Firebase/FireSUsers";

const App = () => {

    return (
        <div className={"app"}>
            <FireSUsers />
            <RouteSwitch>
                <Header />
            </RouteSwitch>
        </div>
    )
}

export default App;
