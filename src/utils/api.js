import axios from 'axios';

export const getAPI = async (url) => {
    return await axios.get(url)
    .then(res => {
        return res.data;
    })
}

export const postAPI = async (url, data) => {
    console.log(data, "postAPI")
    return axios.post(url, data)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log("error", err);
        return false
    })
}