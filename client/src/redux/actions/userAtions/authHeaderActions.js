
 //verifica el almacenamiento local para el elemento del usuario. Si hay un usuario conectado con token de acceso (JWT), devuelva el encabezado de autorización HTTP. De lo contrario, devuelve un objeto vacío.
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return {};
  }
}
