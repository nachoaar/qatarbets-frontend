import axios from "axios";

const register = async (name, age, email, pass) => {
  const dataUser = {
    name,
    age,
    email,
    pass,
    // avatar: 'https://thumbs.dreamstime.com/b/icono-de-usuario-predeterminado-vectores-imagen-perfil-avatar-predeterminada-vectorial-medios-sociales-retrato-182347582.jpg'
  }
    const postUser = await axios.post('http://localhost:3000/user/register', dataUser);
    console.log(postUser);
};
// mimlazo
// 123456789 accessToken
// mimilazo@casa.com

const loginUser = async (email, pass) => {
  try {
    const logUser = await axios.post('http://localhost:3000/user/login', {email, pass});
    if(logUser.data){
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
