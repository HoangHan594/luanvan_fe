import axios from "axios";

const commonConfig = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};

export default (baseURL) => {
    const baseURL = process.env.VUE_APP_API_URL;
    return axios.create({
        baseURL,
        ...commonConfig,
    });
};