import React, { useState, useEffect  } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from 'react-router-dom';
import { Navbar } from "../../Navbar/Navbar";
import { useForm } from "react-hook-form";
import { clearMessage } from '../../../redux/reducer/messageSlice'
import { login } from '../../../redux/reducer/userSlice';

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
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { isLoggedIn } = useSelector((state) => state.user);
  const { message } = useSelector((state) => state.message);

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const onSubmit = (input) => {
    const { email, pass } = input;
    setLoading(true);
    dispatch(login({email, pass}))
    .unwrap()
      .then(() => {
        props.history.push("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return (
    <>
    <Navbar />
    <Center>
      <VStack maxW="900px" w = {[250, 300, 400]} boxShadow='dark-lg' p='6' rounded='md' bg='white' m={8}>
        <Heading>Login</Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl m={3} w = {[150, 250, 350]} id='email'  isInvalid={errors.email? true : false} isRequired>
            <FormLabel htmlFor='email'>Email</FormLabel>
              <Input autoComplete='off' type='text' {...register('email', {
                pattern: {
                  value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                  message: 'invalid format'
                  }
                  })} placeholder='example@domain.com'
              />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl m={3} w = {[150, 250, 350]} id='pass'  isInvalid={errors.pass? true : false} isRequired>
            <FormLabel htmlFor='password'>Password</FormLabel>
              <InputGroup size='md'>
                <Input autoComplete='off' type={show ? 'text' : 'password'} {...register('pass', {
                  minLength: {
                    value: 8,
                    message: 'Greater than 8'
                    }
                    })} placeholder='Your Password'
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

          <Button type='submit' colorScheme='red' m={3}>Login</Button>
          <Link to="/register">
          <Button colorScheme='gray' m={3}>Register</Button>
          </Link>
        </form>
      </VStack>
    </Center>
    </>
  )
}
