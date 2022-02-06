import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from "./styles/GlobalStyle";
import App from "./App";
// State
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <Provider store={store} >
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
