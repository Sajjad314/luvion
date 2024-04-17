import axios from "axios";
import { apiPath } from "../../paths/apiPaths";

export const getConfigurationByName = async (name: string) => {
  axios
    .get(apiPath.configuration.getConfigByName(name))
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};
