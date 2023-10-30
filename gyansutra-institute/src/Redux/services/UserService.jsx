import httpanything from "./http-common.jsx";

const getAll = () => {
    console.log("called inside user service");
    return httpanything.get("user")
}
const getUserLogin = (username, password) => {
    // console.log("called inside user service");
    return httpanything.get(`user?username=${username}&password=${password}`)
}
const RegisterUser = async (data) => {
    console.log("called inside RegisterUser", data);
    return await httpanything.post(`user`, data);

}
// const selectUserByid = () => {
//     console.log("called inside user service");
//     return httpanything.patch("user/2")
// }
// const deleteUserByid = () => {
//     console.log("called inside user service");
//     return httpanything.delete("user/2")
// }

const UserService = {
    getAll,
    getUserLogin,
    RegisterUser
}

export default UserService;