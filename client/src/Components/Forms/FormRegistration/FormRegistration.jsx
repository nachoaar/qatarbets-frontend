import React from 'react';
import { Navbar } from "../../Navbar/Navbar";
import { useForm } from "react-hook-form";
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

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)


  const onSubmit = data => console.log(data);

  console.log(errors)

  // /^([a-zA-z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/gm

  return (
    <>
      <Navbar />
    <Center>
        <VStack maxW="900px" w = {[250, 300, 400]} boxShadow='dark-lg' p='6' rounded='md' bg='white' m={8}>
          <Heading>Sign oup</Heading>
          <form onSubmit={handleSubmit(onSubmit)}>

            <FormControl m={3} w = {[150, 250, 350]}  id='name' isInvalid={errors.name? true : false} isRequired>
              <FormLabel htmlFor='name'>Username</FormLabel>
              <Input autoComplete='off' type='text' {...register('name', {
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

            <FormControl m={3} w = {[150, 250, 350]} id='password'  isInvalid={errors.password? true : false} isRequired>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <InputGroup size='md'>
                <Input autoComplete='off' type={show ? 'text' : 'password'} {...register('password', {
                    minLength: {
                      value: 6,
                      message: 'Greater than 6'
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
                    {errors.password && errors.password.message}
                  </FormErrorMessage>
            </FormControl>

          {/* <div>
            <p>Avatar</p>
            <input type="text" name='avatar' placeholder='url de la img'/>
          </div> */}
          <Button type='submit' colorScheme='red' m={3}>Register</Button>
          </form>
        </VStack>
    </Center>
    </>
  )
}
