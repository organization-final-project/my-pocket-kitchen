import axios from "axios";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/api/auth",
      withCredentials: true
    })
  }

  signup = (username) => {
   
    //  axios.post("/signup", {user}, {withCredentials: true})
    console.log(username)
    return this.service.post('/signup', username)
    .then(response => response.data)
    .catch(e => console.log(e))
  }

  login = (username) => {
    // axios.post("http://localhost:5000/auth/login", {user}, {withCredentials: true})
    return this.service.post('/', username)
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => response.data);
  }

  logout = () => {
    return this.service.get('/logout')
    .then(response => response.data);
  }
}

export default AuthService;