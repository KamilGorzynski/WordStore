/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import userIcon from '../assets/english.png'
import { useRef } from 'react';
import axios from 'axios';

const HeaderContainer = styled.div`
  width: 25rem;
  height: 27rem;
  padding-top: 2rem;
  /* border: 1px solid black; */
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: rgb(250, 250, 250);
  border-radius: 0.2rem;
`

const UserIcon = styled.img`
  width: 8rem;
  margin-bottom: 2rem;
`
    

const LoginInput = styled.input`
  width: 70%;
  height: 3rem;
  border: 2px solid grey;
  background-color: rgb(245, 245, 245);
  margin: 0.5rem 0;
  font-size: 1.2rem;
  border-radius: 0.2rem;
`
const LoginButton = styled.button`
  background-color: rgb(38, 133, 221);
  color: white;
  width: 70%;
  height: 3rem;
  margin: 0.5rem 0;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 0.2rem;
`

const Login = () => {

  const login = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  
  const logInUser = () => {
    if(login.current && password.current) {
        axios.post('http://localhost:8000/api-token-auth/', {
            username: login.current?.value,
            password: password.current?.value
          })
        .then((response) => {
            console.log(response)
        }, (error) => {
            console.log('Lipton')
        });
    }
    
    
    }

  return (
    <HeaderContainer >
       <UserIcon src={ userIcon } alt="user" />
      <LoginInput ref={ login } type='text' placeholder="Login"/>
      <LoginInput ref={ password } type='password' placeholder="Password"/>
      <LoginButton onClick={ logInUser }>Log in</LoginButton>
    </HeaderContainer>
  );
}

export default Login;
