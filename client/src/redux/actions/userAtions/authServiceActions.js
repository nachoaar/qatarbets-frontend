import axios from "axios";

const register = async (name, age, email, pass) => {
  const dataUser = {
    name,
    age,
    email,
    pass,
    // avatar: 'https://thumbs.dreamstime.com/b/icono-de-usuario-predeterminado-vectores-imagen-perfil-avatar-predeterminada-vectorial-medios-sociales-retrato-182347582.jpg'
  }

    const postUser = await axios.post('http://localhost:3001/user/register', dataUser);
    console.log(postUser);
};
// mimlazo
// 123456789 accessToken
// mimilazo@casa.com
//https://qatarbets-backend-production-ab54.up.railway.app
const loginUser = async (email, pass) => {
  try {
    const logUser = await axios.post('http://localhost:3001/user/login',{email, pass}, {withCredentials: true} );

    if(logUser.data){
      localStorage.setItem("user", JSON.stringify(logUser.data));
    }
    console.log(logUser);
    //console.log(logUser.data);
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
