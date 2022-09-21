import React, { useState, useEffect  } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { clearMessage } from '../../../redux/reducer/messageSlice'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { login } from '../../../redux/reducer/userSlice';
import { Footer } from '../../Footer/Footer'

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
  // FormHelperText,
} from '@chakra-ui/react'


export default function FormLogin(props) {
  const dispatch = useDispatch();
  const { reset, register, handleSubmit, formState: { errors } } = useForm();
  const { isLoggedIn } = useSelector((state) => state.user);
  const { message } = useSelector((state) => state.message);

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const clientId="214431339153-ao6cnr5b12t0j093f4ica9lrtdd4mka1.apps.googleusercontent.com";

  useEffect(() => {
    dispatch(clearMessage())
     

    gapi.load("client:auth2", ()=>{
      gapi.auth2.init({clientId:clientId})
    })

  }, [dispatch]);

  const onSubmit = (input) => {
    reset()
    const { email, pass } = input;
    setLoading(true);
    dispatch(login({email, pass}))
    .unwrap()
      .then(() => {
        props.history.push("/home");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  console.log("estado del usuario", isLoggedIn);
  console.log(props)

  const logoutSuccess = () => {
    console.log("Log out successfull!");
  }

  // if (isLoggedIn) {
  //   return <Navigate to="/profile" />;
  // }

  const responseGoogle = (res) => {
    console.log('Logueado como: ', res.profileObj);
  }

  const responseGoogleF = (res) => {
    console.log('Login fail: ', res);
  }
  return (
    <>
    {/* <Navbar /> */}
    <Center>
      <VStack maxW="900px" w = {[250, 300, 400]} boxShadow='dark-lg' p='6' rounded='md' bg='white' m={20}>
        <Heading>Login</Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl m={3} w = {[150, 250, 350]} id='email'  isInvalid={errors.email? true : false} isRequired>
            <FormLabel htmlFor='email'>Correo</FormLabel>
              <Input autoComplete='off' type='text' {...register('email', {
                pattern: {
                  value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                  message: 'Formato invalido'
                  }
                  })} placeholder='ejemplo@domain.com'
              />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl m={3} w = {[150, 250, 350]} id='pass'  isInvalid={errors.pass? true : false} isRequired>
            <FormLabel htmlFor='password'>Contraseña</FormLabel>
              <InputGroup size='md'>
                <Input autoComplete='off' type={show ? 'text' : 'password'} {...register('pass', {
                  minLength: {
                    value: 8,
                    message: '8 Carateres Minimo'
                    }
                    })} placeholder='Tu contraseña(8)'
                />
              <InputRightElement width='5.5rem'>
                <Button h='2rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
                  </InputRightElement>
              </InputGroup>
              <GoogleLogin
              clientId={clientId}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogleF}
              cookiePolicy={'single_host_origin'}/>

              <GoogleLogout
              clientId={clientId}
              buttonText={"Logout"}
              onLogoutSuccess={logoutSuccess}/>

            <FormErrorMessage>
              {errors.pass && errors.pass.message}
            </FormErrorMessage>
          </FormControl>

          <Button type='submit' colorScheme='red' m={3}>Iniciar Sesion</Button>
          <Link to="/register">
          <Button colorScheme='gray' m={3}>Registrarse</Button>
          </Link>
        </form>
      </VStack>
    </Center>
    <Footer/>
    </>
  )
}
