import { createStore } from "redux"
import { devToolsEnhancer } from 'redux-devtools-extension';
import moviePageReducer from "./moviePage/moviePageReducer";

//@ts-ignore
const store = createStore(moviePageReducer, devToolsEnhancer())

export default store

