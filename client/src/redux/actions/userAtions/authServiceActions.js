import axios from "axios";

const register = async (name, age, email, pass) => {
  const dataUser = {
    name,
    age,
    email,
    pass,
  }
    const postUser = await axios.post('https://qatarbets-backend-production-ab54.up.railway.app/user/register', dataUser);
    return postUser;
};
//https://qatarbets-backend-production-ab54.up.railway.app
const loginUser = async (email, pass) => {
  try {
    const logUser = await axios.post('https://qatarbets-backend-production-ab54.up.railway.app/user/login',{email, pass}, {withCredentials: true} );
    if(logUser.data){
      localStorage.setItem("user", JSON.stringify(logUser.data));
    }
    return logUser.data
  } catch (error) {
    console.log(error)
  }
}

const logoutUser = async () => {
 try {
  const logoutUser = await axios.get("https://qatarbets-backend-production-ab54.up.railway.app/validate/logout2");

  console.log(logoutUser)
 } catch (error){
  console.log(error)
 }
};

const authService = {
  register,
  loginUser,
  logoutUser
}


export default authService
