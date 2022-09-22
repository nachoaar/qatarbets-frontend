import axios from "axios";

const register = async (name, age, email, pass, avatar, emailvalidate) => {
  const dataUser = {
    name,
    age,
    email,
    pass,
    avatar,
    emailvalidate
  }
    const postUser = await axios.post('https://qatarbets-backend-production.up.railway.app/user/register', dataUser);
    return postUser;
};
//https://qatarbets-backend-production.up.railway.app
const loginUser = async (email, pass) => {
  try {
    const logUser = await axios.post('https://qatarbets-backend-production.up.railway.app/user/login',{email, pass}, {withCredentials: true} );
    if(logUser.data){
      localStorage.setItem("user", JSON.stringify(logUser.data));
    }
    return logUser.data
  } catch (error) {
    console.log(error)
  }
}

const logoutUser = async () => {
 localStorage.removeItem("user");
};

const authService = {
  register,
  loginUser,
  logoutUser
}


export default authService
