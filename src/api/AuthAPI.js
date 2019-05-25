import axios from 'axios'

/* axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
 axios.defaults.withCredentials = true;
 axios.defaults.crossDomain = true; */

 // storing signup info into the database
function signup(data){
  
  return axios.post("https://qpby0b5jj6.execute-api.us-east-1.amazonaws.com/test", JSON.stringify(data))

}

// reading login info from a database
function login(data){
  return axios.post("https://2awdpfj030.execute-api.us-east-1.amazonaws.com/test", JSON.stringify(data))
}


function axiosSignup(data){
  let config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }
  
  return axios.post("https://qpby0b5jj6.execute-api.us-east-1.amazonaws.com/test", JSON.stringify(data), config)
}


function axiosLogin(data){
  let config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }
  
  return axios.post("https://2awdpfj030.execute-api.us-east-1.amazonaws.com/test", JSON.stringify(data), config)
}

function axiosGetUser(){
  
  let config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization' : localStorage.token
    }
  }

  return axios.get('https://mwuzus6n66.execute-api.us-east-1.amazonaws.com/test', config);
}

/* let url = 'https://qpby0b5jj6.execute-api.us-east-1.amazonaws.com/test';
  let method = 'POST';
  let xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  
  xhr.send(JSON.stringify({
    user_id : "anwar",
    password : "foo",
    email: "adarkazanli96@gmail.com"
    })); */
    /* let data = {
      user_id : "anwar",
      password : "foo",
      email: "adarkazanli96@gmail.com"
      }

    let instance = axios.create({
      baseURL: 'https://qpby0b5jj6.execute-api.us-east-1.amazonaws.com/test',
      timeout: 1000,
      headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'}
    });

    let authOptions = {
      method: 'POST',
      url: 'https://qpby0b5jj6.execute-api.us-east-1.amazonaws.com/test',
      data: data,
      headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000',
      },
      json: true
    };

    //return instance.post({data});

    return axios.post("https://qpby0b5jj6.execute-api.us-east-1.amazonaws.com/test", JSON.stringify(data), {headers: {
      'Access-Control-Allow-Origin': 'https://qpby0b5jj6.execute-api.us-east-1.amazonaws.com/test',
  }}); */

    //return axios.post(authOptions)

    export default {
      signup,
      login,
      axiosLogin,
      axiosSignup,
      axiosGetUser
  }