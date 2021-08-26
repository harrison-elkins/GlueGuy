import axios from "axios";

//Home Page requests
export const home = () => axios.get(`/`);
export const getPlayers = () => axios.get(`/api/players`);

export const getSinglePlayer = (id) => axios.get(`/api/players/${id}`);
