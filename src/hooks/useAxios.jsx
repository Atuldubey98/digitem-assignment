import axios from "axios";

export default function useAxios() {
  const instance = axios.create({
    baseURL: "https://api.unsplash.com",
    params: {
      client_id: `hht7vRK9TxFeV7bCZ5K1ehVe_9OhEB95rO357kznytg`,
    },
  });
  
  return instance;
}

