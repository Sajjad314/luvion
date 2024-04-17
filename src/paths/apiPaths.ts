const baseURL = import.meta.env.VITE_API_BASE_URL;

export const apiPath = {
  baseURL: {
    rootUrl: () => baseURL,
  },
  configuration: {
    getConfigByName: (name: string) =>
      baseURL + `configurations/name?name=${name}`,
    createConfig: () => baseURL + `configurations`,
    patchConfig: (id: number) => baseURL + `configurations/${id}`,
  },
  service: {
    getAllService: () => baseURL + `service`,
    getServiceById: (id: number) => baseURL + `service/${id}`,
    createService: () => baseURL + `service`,
    patchService: (id: number) => baseURL + `service/${id}`,
    deleteService: (id: number) => baseURL + `service/${id}`,
  },
};
