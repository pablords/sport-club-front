import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export default {
  getPartners: async () => {
    try {
      const { data } = await api.get("/partners");
      return data
    } catch (err) {
        return err.reponse
    }
  },
};
