import httpanything from "./http-common.jsx";


const getAll = () => {
    console.log("called inside user service");
    return httpanything.get("users")
}
const selectUserByid = () => {
    console.log("called inside user service");
    return httpanything.patch("users/2")
}
const deleteUserByid = () => {
    console.log("called inside user service");
    return httpanything.delete("users/2")
}

const UserService = {
    getAll, selectUserByid, deleteUserByid
}

export default UserService;