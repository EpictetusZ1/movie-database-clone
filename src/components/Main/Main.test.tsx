import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from "./Main";
import {Provider} from "react-redux";
import store from "../../redux/store";

describe("Check rendering of Main", () => {
    test("Renders featured today h3", () => {
        render( <Provider store={store} > <Main /> </Provider>);
        const h3Element = screen.getByText(/Featured/i);
        expect(h3Element).toBeInTheDocument();
    });
})

