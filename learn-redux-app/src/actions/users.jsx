import {RETRIVE_ALL_USERS } from "./type"

// import UserService from "./../services/UserService.jsx"

export const retierveUsers = () => async (dispatch) => {

    console.log("actions retierveUsers");

    // const ResData = await UserService.getAll();

    // console.log("action resdata",ResData);

    // return dispatch({ type: "RETRIVE_ALL_USERS", payload: ResData })

    return dispatch({ type: RETRIVE_ALL_USERS, payload: { "data": "anything" } })
}
// export const loginUsers = (uname,pass) => async (dispatch) => {
//     // console.log("actions retierveUsers",UserService);
//     // const
//     const ResData = await UserService.getUserLogin(uname,pass);
//     console.log("action resdata",ResData);
//     return dispatch({ type: "RETRIVE_LOGIN_USERS", payload: ResData })
//     // return dispatch({ type: RETRIVE_ALL_USERS, payload: { "data": "anything" } })
// }
