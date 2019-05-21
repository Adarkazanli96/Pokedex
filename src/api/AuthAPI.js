import axios from 'axios'

/* axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
 axios.defaults.withCredentials = true;
 axios.defaults.crossDomain = true; */

function postSample(){
  
  /* let url = 'https://qpby0b5jj6.execute-api.us-east-1.amazonaws.com/test';
  let method = 'POST';
  let xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  
  xhr.send(JSON.stringify({
    user_id : "anwar",
    password : "foo",
    email: "adarkazanli96@gmail.com"
    })); */

    return axios.post("https://qpby0b5jj6.execute-api.us-east-1.amazonaws.com/test", JSON.stringify({
        user_id : "anwar",
        password : "foo",
        email: "adarkazanli96@gmail.com"
        }))

}

export default {
    postSample
}