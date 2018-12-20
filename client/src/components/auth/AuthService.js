import axios from "axios";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
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
    return this.service.post('/auth/login', username)
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

  myKitchen = (shoppingList) => {
    return this.service.post('my-kitchen',shoppingList)
    // .then(response => response.data)
  }
  
  delete = (user) =>{
    return this.service.get(`myProfile/delete/${user._id}`)
    .then(response => response.data)
  }

  addShoppingList = (MyShoppingList)=>{
   return this.service.post('my-shopping-list/', MyShoppingList)
  //  .then(response => response.data );
 
   }
  
}



export default AuthService;



