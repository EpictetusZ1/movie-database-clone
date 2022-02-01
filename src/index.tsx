import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from "./styles/GlobalStyle";
import RouteSwitch from "./RouteSwitch";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <RouteSwitch />
    </React.StrictMode>,
    document.getElementById('root')
);
