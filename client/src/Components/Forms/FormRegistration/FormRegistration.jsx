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
  // FormErrorMessage
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
        <VStack maxWith={700}>
          <Heading>Sign oup</Heading>
          <form onSubmit={handleSubmit(onSubmit)}>

            <FormControl id='name' marginButtom={5} isInvalid={errors.name? true : false} isRequired>
              <FormLabel>Username</FormLabel>
              <Input autoComplete='off' type='text' {...register('name', {
                required: {
                  value: true,
                  message: 'Required Field.'
                  },
                  pattern: {
                    value: /[A-Z]+$/i,
                    message: 'only letters'
                    }
                    })} placeholder='your name'
              />
              {errors.name ? <p>{errors.name.message}</p>: null }
            </FormControl>

            <FormControl id='age' marginButtom={5} isInvalid={errors.age? true : false} isRequired>
              <FormLabel>Age</FormLabel>
                <Input autoComplete='off' type='number' {...register('age', {
                  required: {
                    value: true,
                    message: 'Required Field.'
                    },
                    min: {
                      value: 18,
                      message: 'Your´re not old enough'
                      }
                      })} placeholder='Your Age +18'
                />

            </FormControl>

            <FormControl id='email' marginButtom={5} isInvalid={errors.email? true : false} isRequired>
              <FormLabel>Email</FormLabel>
                <Input autoComplete='off' type='text' {...register('email', {
                  required: {
                    value: true,
                    message: 'Required Field.'
                    },
                    pattern: {
                      value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                      message: 'invalid format'
                      }
                      })} placeholder='example@domain.com'
                />

            </FormControl>

            <FormControl id='password' marginButtom={5} isInvalid={errors.password? true : false} isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup size='md'>
                <Input autoComplete='off' type={show ? 'text' : 'password'} {...register('password', {
                  required: {
                    value: true,
                    message: 'Required Field.'
                    },
                    minLength: {
                      value: 6,
                      message: 'Greater than 6'
                      }
                      })} placeholder='Your Password'
                      />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                  </InputGroup>

            </FormControl>

          {/* <div>
            <p>Avatar</p>
            <input type="text" name='avatar' placeholder='url de la img'/>
          </div> */}
          <Button type='submit'>Register</Button>
          </form>
        </VStack>
    </Center>
    </>
  )
}
