import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import rootReducer from "../reducer/index"

let initialState = {}
let middleware = [thunk]
let store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
// console.log(middleware);
export default store