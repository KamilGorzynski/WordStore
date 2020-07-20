/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import userIcon from '../assets/english.svg'
import { useRef, useContext, FunctionComponent, useState } from 'react'
import { ACTIONS, StoreContext } from '../context'
import axios from 'axios';


const LoginContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  text-align: center;
  justify-content: center;
  color: white;
`

const LoginHeader = styled.h2`
  font-size: 2rem;
  letter-spacing: 0.3rem;
`

const UserIcon = styled.img`
  width: 10rem;
  margin: 1rem 0;
`

const LightBlueSpan = styled.span`
  color: rgb(38, 133, 221);
`

const LoginForm = styled.div`
  width: 20rem;
  padding-top: 2rem;
  text-align: center;
  background-color: rgb(250, 250, 250);
  border-radius: 0.2rem;
`
    
const LoginInput = styled.input`
  width: 18rem;
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
  width: 18rem;
  height: 3rem;
  margin: 0.5rem 0 1rem 0;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 0.2rem;
`

const RedH4 = styled.h4`
  color: red;
`

const Login: FunctionComponent = () => {

  const { dispatch } = useContext(StoreContext);
  const [communicate, setCommunicate] = useState<string>(''); 
    

  const login = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  
  const logInUser = () => {
    if(login.current && password.current) {
        axios.post('http://localhost:8000/api-token-auth/', {
            username: login.current?.value,
            password: password.current?.value
          })
        .then((response) => {
            console.log(response)
            const token = response.data.token
            localStorage.setItem("token", String(token))
            dispatch({
              type: ACTIONS.SET_TOKEN,
              payload: token 
          });
        }, (error) => {
            setCommunicate('Niepoprawny login lub hasło')
      
        });
        login.current.value = ''
        password.current.value = ''
    }
  }

    return (
      <LoginContainer>
        <UserIcon src={ userIcon } alt="user"/>
        <LoginHeader><LightBlueSpan>Word</LightBlueSpan> Store</LoginHeader>
        <LoginForm >
          <LoginInput ref={ login } type='text' placeholder="Login"/>
          <LoginInput ref={ password } type='password' placeholder="Password"/>
          { communicate && <RedH4>{ communicate }</RedH4> }
          <LoginButton onClick={ logInUser }>Log in</LoginButton>
          
        </LoginForm>
      </LoginContainer>
    );
  }
  


export default Login;
