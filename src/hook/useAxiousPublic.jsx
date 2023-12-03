import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: 'https://survey-server-eight.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;