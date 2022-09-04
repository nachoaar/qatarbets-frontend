import axios from "axios";

const register = async (name, age, email, pass) => {
  const dataUser = {
    name,
    age,
    email,
    pass,
    avatar: 'https://thumbs.dreamstime.com/b/icono-de-usuario-predeterminado-vectores-imagen-perfil-avatar-predeterminada-vectorial-medios-sociales-retrato-182347582.jpg'
  }
  try {
    const postUser = await axios.post('', dataUser);
    alert("Created User");
  } catch (error) {
    console.log(error);
    alert(error.response.data.msg);
  }
};

const loginUser = async (email, pass) => {
  try {
    const logUser = await axios.post('', {email, pass});
    if(logUser.data.accessToken){
      localStorage.setItem("user", JSON.stringify(logUser.data));
    }
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
