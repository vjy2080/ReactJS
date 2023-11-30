const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
console.log("upDown.js")

    switch (action.type) {
        case "INCREMENT": return state + action.payload;
        case "DECREMENT": return state - action.payload;
        default: return state;
    }
}

export default changeTheNumber;