import axios from "axios";

export const getPlayers = () => axios.get(`/api/players`);
