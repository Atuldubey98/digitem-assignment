import axios from "axios";

export default function useAxios() {
  const instance = axios.create({
    baseURL: "https://api.unsplash.com",
    params: {
      client_id: `PWuLcm4KmXnbpPzmhzKRrI8iPFZt1gry5kar_-lu7lg`,
    },
  });
  
  return instance;
}

