import axios from "axios";

const restaurenteApi = axios.create({
    // baseURL:"http://localhost:4005/",
    baseURL:"https://milahousebackend-production.up.railway.app",

});

restaurenteApi.interceptors.request.use((config) => {
	config.headers = {
		"x-token": localStorage.getItem("token"),
	};
	return config;
});

export default restaurenteApi;