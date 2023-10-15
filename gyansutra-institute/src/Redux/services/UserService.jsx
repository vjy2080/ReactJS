import httpanything from "./http-common.jsx";

const getAll = () => {
    console.log("called inside user service");
    return httpanything.get("users")
}
const getUserLogin = (username, password) => {
    // console.log("called inside user service");
    return httpanything.get(`user?username=${username}&password=${password}`)
}
const RegisterUser = (data) => {
    console.log("called inside RegisterUser", data);
    return httpanything.post(`user`, data)
}
// const selectUserByid = () => {
//     console.log("called inside user service");
//     return httpanything.patch("users/2")
// }
// const deleteUserByid = () => {
//     console.log("called inside user service");
//     return httpanything.delete("users/2")
// }

const UserService = {
    getAll,
    getUserLogin,
    RegisterUser
}

export default UserService;