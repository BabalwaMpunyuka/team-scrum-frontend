import axios from "axios";

const API = axios.create({
  //process.env.REACT_APP_NODE_ENV === "development"?process.env.REACT_APP_BACKEND_DEV_HOST:process.env.REACT_APP_BACKEND_HOST,
  baseURL: "http://Itiaacon.azurewebsites.net",
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
