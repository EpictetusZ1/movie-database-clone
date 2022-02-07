import { createStore } from "redux"
import appReducer from "./appStore/appReducer";
// Dev Only
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(appReducer, devToolsEnhancer({}))

export default store

