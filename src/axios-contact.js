import axios from "axios";

const instance = axios.create({
    baseURL:'https://exam9-10879-default-rtdb.firebaseio.com/'
})

export default instance;