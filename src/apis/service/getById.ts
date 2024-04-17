import axios from "axios";
import { apiPath } from "../../paths/apiPaths";

export const getAllService = async (id: number) => {
  axios
    .get(apiPath.service.getServiceById(id))
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};
