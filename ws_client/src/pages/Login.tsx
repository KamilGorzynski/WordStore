/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import mainIcon from '../assets/book.png'
import { useRef, useContext, FunctionComponent, useState } from 'react'
import { ACTIONS, StoreContext } from '../context'
import Button from '../components/Button'
import Input from '../components/Input'
import Message from '../components/Message'
import config from '../config/config'
import axios from 'axios';
import { AxiosResponse, AxiosError } from 'axios'


const LoginBackground = styled.div`
  background-color: rgb(7, 50, 61);
  width: 100vw;
  height: 100vh;
`

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

const LightGreenSpan = styled.span`
  color: rgb(30, 170, 93);
`

const LoginForm = styled.div`
  width: 20rem;
  padding-top: 2rem;
  text-align: center;
  background-color: rgb(245, 245, 245);
  border-radius: 0.2rem;
`

const RedH4 = styled.h4`
  color: red;
`

const Login: FunctionComponent = () => {

  const { dispatch } = useContext(StoreContext);
  const [message, setMessage] = useState<string>('');
  const { login: loginConfig, mainMessages } = config 
    

  const login = useRef<HTMLInputElement | any>(null);
  const password = useRef<HTMLInputElement | any>(null);
  
  const logInUser = () => {
    const userName: string = login.current.value
    const userPassword: string = password.current.value
    if(userName && userPassword) {
        axios.post('http://localhost:8000/api-token-auth/', {
            username: userName,
            password: password.current?.value
          })
        .then((response: AxiosResponse) => {
            const token = response.data.token
            localStorage.setItem("token", String(token))
            localStorage.setItem("username", userName)
            dispatch({
              type: ACTIONS.SET_TOKEN,
              payload: token 
            });
            dispatch({
              type: ACTIONS.SET_USER_NAME,
              payload: userName 
            });
        })
        .catch((error: AxiosError) => {
          if (error.response?.status === 400) setMessage(loginConfig.messages[0]) 
          else setMessage(mainMessages[0])  
        })
    } else {
      setMessage(loginConfig.messages[1])
    }
    login.current.value = ''
    password.current.value = ''
  }

    return (
      <LoginBackground>
        <LoginContainer>
          <UserIcon src={ mainIcon } alt="user"/>
          <LoginHeader><LightGreenSpan>Word</LightGreenSpan> Store</LoginHeader>
          <LoginForm >
            <Input width='18rem' reference={ login } type='text' placeholder={ loginConfig.login } />
            <Input width='18rem' reference={ password } type='password' placeholder={ loginConfig.password } />
            { message && <Message value={ message } setMessageFunc={ setMessage } /> }
            <Button onClickHandler={ logInUser } value={ loginConfig.loginButton }/>
          </LoginForm>
        </LoginContainer>
      </LoginBackground>
      
    );
  }
  


export default Login;
