import axios from "axios";

const intance = axios.create({
    baseURL: "http://localhost:3334",
    headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },

});
export default intance;