import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import storeSynchronize from "redux-localstore";

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;

storeSynchronize(store);
