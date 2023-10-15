import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3004",
    headers: {
        "Content-type": "application/json"
    }
})