import axios from "axios";

//Home Page requests
export const home = () => axios.get(`/`);
export const getPlayers = () => axios.get(`/api/players`);
