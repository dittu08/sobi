// Store.js
import { legacy_createStore as createStore } from "redux";
import itemReducer from "./Reducers";

const Store = createStore(itemReducer);

export default Store;