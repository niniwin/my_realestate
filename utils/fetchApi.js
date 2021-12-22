import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "bac24131dcmshab5e0d6450566a0p1da85cjsnca3c2e56b276",
    },
  });
  return data;
};
