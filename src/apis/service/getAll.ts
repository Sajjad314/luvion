import axios from "axios";
import { apiPath } from "../../paths/apiPaths";

export const getAllService = async () => {
  axios
    .get(apiPath.service.getAllService())
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};
