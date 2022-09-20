import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Navbar } from "../../Navbar/Navbar";
import { useForm } from "react-hook-form";
import { clearMessage } from "../../../redux/reducer/messageSlice";
import { Footer } from "../../Footer/Footer";
import { login, logout } from "../../../redux/reducer/userSlice";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { useCookies } from "react-cookie";

import {
  FormControl,
  FormLabel,
  InputGroup,
  Center,
  Heading,
  Input,
  InputRightElement,
  VStack,
  Button,
  FormErrorMessage,
  AlertIcon,
  Alert,
  AlertTitle,
  AlertDescription,
  // FormHelperText,
} from "@chakra-ui/react";
import axios from "axios";

export default function FormLogin(props) {
  const [cookies, setCookie] = useCookies(["acces_token"]);
  const dispatch = useDispatch();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isLoggedIn } = useSelector((state) => state.user);
  const { message } = useSelector((state) => state.message);
  const navigate = useNavigate();


  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const clientId =
    "214431339153-ao6cnr5b12t0j093f4ica9lrtdd4mka1.apps.googleusercontent.com";

  useEffect(() => {
    dispatch(clearMessage());

    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId: clientId });
    });
  }, [dispatch]);

  const onSubmit = (input) => {
    reset();
    const { email, pass } = input;
    setLoading(true);
    dispatch(login({ email, pass }))
      .unwrap()
      .then(() => {
        navigate("/home");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      }); 
  };

  let messages = null;

  if (message) {
    /* if (message === "Usuario Registrado!") {
      navigate('/login')
    } */
    if (message.hasOwnProperty("error")) {
      messages = (
        <VStack maxW="900px">
          <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>|</AlertTitle>
            <AlertDescription>{message.error}</AlertDescription>
            {/* <Link to="/login">
            <Button colorScheme='red'>Iniciar Sesión</Button>
            </Link> */}
          </Alert>
        </VStack>
      );
    } else {
      navigate("/home");
    }
  }

  console.log("estado del usuario", isLoggedIn);
  console.log(props);

  const logoutSuccess = () => {
    console.log("Log out successfull!");
  };

  // if (isLoggedIn) {
  //   return <Navigate to="/profile" />;
  // }

  const responseGoogle = async (res) => {
    /* console.log(res);
    console.log("Logueado como: ", res.profileObj); */
    
    console.log("accessToken: ", res.accessToken);
    console.log("tokenId: ", res.tokenId);
    let data = await axios.post('http://localhost:3001/validate/google', {token: res.tokenId})
    console.log(data.data);
  };

  const responseGoogleF = (res) => {
    console.log("Login fail: ", res);
  };

  return (
    <>
      {/* <Navbar /> */}
      <Center>
        <VStack
          maxW="900px"
          w={[250, 300, 400]}
          boxShadow="dark-lg"
          p="6"
          rounded="md"
          bg="white"
          m={20}
        >
          <Heading>Login</Heading>
          {messages}

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              m={3}
              w={[150, 250, 350]}
              id="email"
              isInvalid={errors.email ? true : false}
              isRequired
            >
              <FormLabel htmlFor="email">Correo</FormLabel>
              <Input
                autoComplete="off"
                type="text"
                {...register("email", {
                  pattern: {
                    value:
                      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                    message: "Formato invalido",
                  },
                })}
                placeholder="ejemplo@domain.com"
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              m={3}
              w={[150, 250, 350]}
              id="pass"
              isInvalid={errors.pass ? true : false}
              isRequired
            >
              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <InputGroup size="md">
                <Input
                  autoComplete="off"
                  type={show ? "text" : "password"}
                  {...register("pass", {
                    minLength: {
                      value: 8,
                      message: "8 Carateres Minimo",
                    },
                  })}
                  placeholder="Tu contraseña(8)"
                />
                <InputRightElement width="5.5rem">
                  <Button h="2rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogleF}
                isSignedIn={true}
                cookiePolicy={"single_host_origin"}
              />
              <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={logoutSuccess}
              />

              <FormErrorMessage>
                {errors.pass && errors.pass.message}
              </FormErrorMessage>
            </FormControl>

            <Button type="submit" colorScheme="red" m={3}>
              Iniciar Sesion
            </Button>
            <Link to="/register">
              <Button colorScheme="gray" m={3}>
                Registrarse
              </Button>
            </Link>
          </form>
        </VStack>
      </Center>
      <Footer />
    </>
  );
}
