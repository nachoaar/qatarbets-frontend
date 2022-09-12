import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Navbar } from "../../Navbar/Navbar";
import { useForm } from "react-hook-form";
import  { registerUser }  from '../../../redux/reducer/userSlice'
import { clearMessage } from '../../../redux/reducer/messageSlice'
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
  AlertIcon,
  Alert,
  AlertTitle,
  AlertDescription,
  // FormHelperText,
} from '@chakra-ui/react'

export default function FormRestration() {
  const { reset, register, handleSubmit, formState: { errors } } = useForm();
  const { message } = useSelector((state) => state.message);

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);


  const onSubmit = (input) => {
    reset();
    const {name, age ,email, pass} = input;
    dispatch(registerUser({name, age, email, pass}))
  };

  let messages = null;

  if(message){
    messages =
      <VStack maxW="900px">
        <Alert status='success'>
        <AlertIcon />
        <AlertTitle mr={2}>|</AlertTitle>
          <AlertDescription>
            {message}
          </AlertDescription>
          <Link to="/login">
          <Button colorScheme='red'>Iniciar Sesión</Button>
          </Link>
        </Alert>
      </VStack>
  };

  return (
    <>
      <Navbar />

    <Center>
        <VStack maxW="900px" w = {[250, 300, 400]} boxShadow='dark-lg' p='6' rounded='md' bg='white' m={20}>
          {messages}
          <Heading>Registro</Heading>
          <form onSubmit={handleSubmit(onSubmit)}>

            <FormControl m={3} w = {[150, 250, 350]}  id='name' isInvalid={errors.name? true : false} isRequired>
              <FormLabel htmlFor='name'>Nombre de Usuario</FormLabel>
              <Input autoComplete='off' type='text' {...register('name', {
                required: {
                  value: true,
                  message: "Campo Requerido"
                },
                  pattern: {
                    value: /[A-Z]+$/i,
                    message: 'Solo Letras'
                    }
                    })} placeholder='Nombre de Usuario'
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl m={3} w = {[150, 250, 350]} id='age'  isInvalid={errors.age? true : false} isRequired>
              <FormLabel htmlFor='age'>Edad</FormLabel>
                <Input autoComplete='off' type='number' {...register('age', {
                    min: {
                      value: 18,
                      message: 'tiene que ser +18 años'
                      }
                      })} placeholder='Tu edad +18'
                />
                <FormErrorMessage>
                  {errors.age && errors.age.message}
                </FormErrorMessage>
            </FormControl>

            <FormControl m={3} w = {[150, 250, 350]} id='email'  isInvalid={errors.email? true : false} isRequired>
              <FormLabel htmlFor='email'>Correo</FormLabel>
                <Input autoComplete='off' type='text' {...register('email', {
                  required: {
                    value: true,
                    message: "Campo Requerido"
                  },
                    pattern: {
                      value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                      message: 'Formato Invalido'
                      }
                      })} placeholder='ejemplo@domain.com'
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
            </FormControl>

            <FormControl m={3} w = {[150, 250, 350]} id='pass'  isInvalid={errors.pass? true : false} isRequired>
              <FormLabel htmlFor='pass'>Contraseña</FormLabel>
              <InputGroup size='md'>
                <Input autoComplete='off' type={show ? 'text' : 'password'} {...register('pass', {
                  required: {
                    value: true,
                    message: "Campo Requerido"
                  },
                    minLength: {
                      value: 8,
                      message: '8 Carateres Minimo'
                      }
                      })} placeholder='Tu contraceña(8)'
                      />
                <InputRightElement width='5.5rem'>
                  <Button h='2rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.pass && errors.pass.message}
                  </FormErrorMessage>
            </FormControl>

          <Button type='submit' colorScheme='red' m={3}>Registrarse</Button>
          <FormErrorMessage>{message && message}</FormErrorMessage>
          </form>
        </VStack>
    </Center>
    <Footer />
    </>
  )
}
