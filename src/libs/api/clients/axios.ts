import axios from "axios";

const client = axios.create({
  baseURL: process.env.API_BASEURL,
});

// request interceptor
client.interceptors.request.use(
  (config) => {
    // console.log(
    //     '%cinterceptor.request.config: ',
    //     'background-color: gold; color: black; font-weight: bold',
    //     config.url)

    return config;
  },
  (error) => {
    // console.log(
    //   '%cinterceptor.request.error: ',
    //   'background-color: gold; color: black; font-weight: bold',
    //   error)
    return Promise.reject(error);
  }
);

// response interceptor
client.interceptors.response.use(
  (response) => {
    // console.log(
    //     '%cinterceptor.response.response: ',
    //     'background-color: fuchsia; color: white; font-weight: bold',
    //     response)

    return response;
  },
  (error) => {
    {
      process.env.NODE_ENV === "development" &&
        console.log(
          "%cinterceptor.response.error: ",
          "background-color: fuchsia; color: white; font-weight: bold",
          error
        );
    }

    return Promise.reject(error);
  }
);

export default client;