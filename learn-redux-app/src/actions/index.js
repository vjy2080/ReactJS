export const incNumber = (num) => {
    console.log("called-incNumber");

    return {
        type: "INCREMENT",
        payload: num,
    }
};

export const decNumber = (num) => {
    console.log("called-decNumber");

    return {
        type: "DECREMENT",
        payload: num,
    }
};