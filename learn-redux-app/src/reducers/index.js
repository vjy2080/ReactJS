import changeTheNumber from './upDown';

import { combineReducers } from "redux";
console.log("called-reducer/index")

const rootReducer = combineReducers({

    changeTheNumber
});

export default rootReducer;