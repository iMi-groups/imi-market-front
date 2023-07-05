import axios from "axios";

const BaseURL = "https://imimarket.pythonanywhere.com/api";

function Axios(method, url, data = {}) {
  return axios({
    method: method,
    url: `${BaseURL}/${url}`,
    data: data,
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export default Axios;
