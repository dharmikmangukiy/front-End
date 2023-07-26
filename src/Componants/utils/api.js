import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.post(BASE_URL + url);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
