import axios from "axios";
//http://localhost:5000
const API = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
      "Accept":"*/*",
    "content-type": "application/json"
  },
});

API.interceptors.request.use((request) => {
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  if (loggedInUser && loggedInUser.hasOwnProperty("token")) {
    request.headers.Authorization = `Bearer ${loggedInUser.token}`;
    request.headers['Access-Control-Allow-Origin']=true;
  }

  // console.log(request);
  return request;
});

API.interceptors.response.use((response) => {
  // if(response instanceof Object){
  //   console.log(true,JSON.stringify(response));
  // }
  // console.log(response.data);
  return response;
});

export default API;
