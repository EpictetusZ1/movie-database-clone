import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from "./styles/GlobalStyle";
import App from "./App";
import Header from "./components/Header/Header";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <Header />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
