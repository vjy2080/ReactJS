import { RETRIVE_ALL_USERS, RETRIVE_LOGIN_USERS } from "../actions/type.jsx"


const initialState = {}

const usersReducer = (users = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case RETRIVE_ALL_USERS: console.log("reducer/user => RETRIVE_ALL_USERS");

            return { ...payload }

        case RETRIVE_LOGIN_USERS: console.log("called reducer RETRIVE_LOGIN_USERS");
            return { ...payload }

        default:
            return users
    }

}
export const selectUser = (state) => state.users

export default usersReducer;