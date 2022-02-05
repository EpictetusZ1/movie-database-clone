import { createStore } from "redux"
import moviePageReducer from "./moviePage/moviePageReducer";
// Dev Only
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(moviePageReducer, devToolsEnhancer({}))

export default store

