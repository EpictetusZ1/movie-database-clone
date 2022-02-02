import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import RouteSwitch from "./Router/RouteSwitch";

const App = () => {
    return (
        <Provider store={store} >
            <RouteSwitch />
        </Provider>
    );
}

export default App;
