import axios from "axios";

const commonConfig = {
    headers: {
        "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
        Accept: "multipart/form-data; boundary=<calculated when request is sent>",
    },
};
export default (baseURL) => {
    baseURL = process.env.VUE_APP_API_URL;
    return axios.create({
        baseURL,
        ...commonConfig,
    });
};