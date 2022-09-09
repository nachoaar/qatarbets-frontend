import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../../Navbar/Navbar";
import { useForm } from "react-hook-form";
import  { registerUser }  from '../../../redux/reducer/userSlice'
import { clearMessage } from '../../../redux/reducer/messageSlice'

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
  FormErrorMessage
  // FormHelperText,
} from '@chakra-ui/react'



export default function FormRestration() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);


  const onSubmit = (input) => {
    const {name, age ,email, pass} = input;
    setSuccessful(false);
    dispatch(registerUser({name, age, email, pass}))
    .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  // /^([a-zA-z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/gm

  return (
    <>
      <Navbar />
    <Center>
        <VStack maxW="900px" w = {[250, 300, 400]} boxShadow='dark-lg' p='6' rounded='md' bg='white' m={8}>
          <Heading>Sign up</Heading>
          <form onSubmit={handleSubmit(onSubmit)}>

            <FormControl m={3} w = {[150, 250, 350]}  id='name' isInvalid={errors.name? true : false} isRequired>
              <FormLabel htmlFor='name'>Username</FormLabel>
              <Input autoComplete='off' type='text' {...register('name', {
                required: {
                  value: true,
                  message: "Required field"
                },
                  pattern: {
                    value: /[A-Z]+$/i,
                    message: 'only letters'
                    }
                    })} placeholder='your name'
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl m={3} w = {[150, 250, 350]} id='age'  isInvalid={errors.age? true : false} isRequired>
              <FormLabel htmlFor='age'>Age</FormLabel>
                <Input autoComplete='off' type='number' {...register('age', {
                    min: {
                      value: 18,
                      message: 'Your´re not old enough'
                      }
                      })} placeholder='Your Age +18'
                />
                <FormErrorMessage>
                  {errors.age && errors.age.message}
                </FormErrorMessage>
            </FormControl>

            <FormControl m={3} w = {[150, 250, 350]} id='email'  isInvalid={errors.email? true : false} isRequired>
              <FormLabel htmlFor='email'>Email</FormLabel>
                <Input autoComplete='off' type='text' {...register('email', {
                  required: {
                    value: true,
                    message: "Required field"
                  },
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
              <FormLabel htmlFor='pass'>Password</FormLabel>
              <InputGroup size='md'>
                <Input autoComplete='off' type={show ? 'text' : 'password'} {...register('pass', {
                  required: {
                    value: true,
                    message: "Required field"
                  },
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

          <Button type='submit' colorScheme='red' m={3}>Register</Button>
          </form>
        </VStack>
    </Center>
    </>
  )
}
