import axios from "axios";

const register = async (name, email, pass) => {
  const dataUser = {
    name,
    email,
    pass,
    // avatar: 'https://thumbs.dreamstime.com/b/icono-de-usuario-predeterminado-vectores-imagen-perfil-avatar-predeterminada-vectorial-medios-sociales-retrato-182347582.jpg'
  }
    const postUser = await axios.post('https://qatarbets-backend-production-ab54.up.railway.app/user/register', dataUser);
    console.log(postUser);
};
// mimlazo
// 123456789
// mimilazo@casa.com

const loginUser = async (email, pass) => {
  try {
    const logUser = await axios.post('https://qatarbets-backend-production-ab54.up.railway.app/user/login', {email, pass});
    // console.log(logUser);
    if(logUser.data.accessToken){
      localStorage.setItem("user", JSON.stringify(logUser.data));
    }
    console.log(logUser.data);
    return logUser.data
  } catch (error) {
    console.log(error)
  }
}

const logoutUser = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  loginUser,
  logoutUser
}


export default authService
