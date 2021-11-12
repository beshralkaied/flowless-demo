import axios from 'axios'

axios.interceptors.request.use(function (config) {
    // console.log('Request: ', config)
    // Do something before request is sent
    return config;
  }, function (error) {
      alert('Whoops! Something went wrong')
      // console.log(error)
    // Do something with request error
    return Promise.reject(error);
  });

  axios.interceptors.response.use(function (response) {
      // console.log('Response: ', response)
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
      alert('Whoops! Something went wrong')
      // console.log(error)
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
