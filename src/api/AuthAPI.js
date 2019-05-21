import axios from 'axios'

/* axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
 axios.defaults.withCredentials = true;
 axios.defaults.crossDomain = true; */

 // storing signup info into the database
function signup(){
  
  /* let url = 'https://qpby0b5jj6.execute-api.us-east-1.amazonaws.com/test';
  let method = 'POST';
  let xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  
  xhr.send(JSON.stringify({
    user_id : "anwar",
    password : "foo",
    email: "adarkazanli96@gmail.com"
    })); */
    let data = {
      user_id : "anwar",
      password : "foo",
      email: "adarkazanli96@gmail.com"
      }

    /* let authOptions = {
      method: 'POST',
      url: 'https://qpby0b5jj6.execute-api.us-east-1.amazonaws.com/test',
      data: JSON.stringify(data),
      headers: {
          'Access-Control-Allow-Origin': 'localhost:3000',
      },
      json: true
    }; */

    return axios.post("https://qpby0b5jj6.execute-api.us-east-1.amazonaws.com/test", JSON.stringify(data))

}

// reading login info from a database
function login(){
  return axios.post("https://2awdpfj030.execute-api.us-east-1.amazonaws.com/test", JSON.stringify({
        user_id : "anwar",
        password : "foo",
        email: "adarkazanli96@gmail.com"
        }))
}

export default {
    signup,
    login
}