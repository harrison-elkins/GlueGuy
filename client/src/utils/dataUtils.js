import axios from "axios";

export const home = () => axios.get(`/`);
export const getPlayers = () => axios.get(`/api/players`);
