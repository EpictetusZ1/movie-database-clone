import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./components/Main/Main";

const App = () => {
    return (
        <Provider store={store} >
            <div>
                <Main />
            </div>
        </Provider>
    );
}

export default App;
