import axios from "axios";

const base_url = "https://opentdb.com/api.php";

export const Api = axios.create({
  baseURL: base_url,
});

export default Api;
