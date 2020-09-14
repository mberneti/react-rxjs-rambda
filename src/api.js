import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const searchUserByName = (q) =>
  axios
    .get(BASE_URL + `?q=${q}`)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
