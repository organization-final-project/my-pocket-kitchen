import axios from "axios";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/api/",
      withCredentials: true
    })
  }

  signup = (username) => {
   
    //  axios.post("/signup", {user}, {withCredentials: true})
    console.log(username)
    return this.service.post('auth/signup', username)
    .then(response => response.data)
    .catch(e => console.log(e))
  }

  login = (username) => {
    // axios.post("http://localhost:5000/auth/login", {user}, {withCredentials: true})
    return this.service.post('/auth', username)
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('auth/loggedin')
    .then(response => response.data);
  }

  logout = () => {
    return this.service.get('auth/logout')
    .then(response => response.data);
  }

  recipe = () =>{
    return this.service.get('recipe')
    .then(response=> response.data)
  }
  
}

export default AuthService;