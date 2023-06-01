import axios from "axios";

const restaurenteApi = axios.create({
    baseURL:"http://localhost:4004/",
});

restaurenteApi.interceptors.request.use((config) => {
	config.headers = {
		"x-token": localStorage.getItem("token"),
	};
	return config;
});

export default restaurenteApi;