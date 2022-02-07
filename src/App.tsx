// React & Components
import React from 'react';
import RouteSwitch from "./router/RouteSwitch";
import Header from "./components/Header/Header";
import Firebase from "./Firebase/Firebase";

const App = () => {

    return (
        <div className={"app"}>
            <Firebase />
            <RouteSwitch>
                <Header />
            </RouteSwitch>
        </div>
    )
}

export default App;
