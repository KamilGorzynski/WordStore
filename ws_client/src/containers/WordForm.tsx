/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { FunctionComponent, useRef, useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Message from '../components/Message'
import config from '../config/config'
import axios from 'axios'
import { AxiosError } from 'axios'


const Form = styled.div`
  margin: 3rem auto;
  width: 40rem;
  text-align: center;
`


const WordForm: FunctionComponent = () => {

  const [message, setMessage] = useState<string>(''); 
  const word = useRef<any>(null)
  const definition = useRef<any>(null)
  const example = useRef<any>(null)
  const { wordForm, mainMessages } = config

    const click = () => {
      const wordValue: string = word.current.value
      const definitionValue: string = definition.current.value
      if (wordValue && definitionValue) {
        const authRequest = axios.create({
          baseURL: 'http://localhost:8000',
          headers: {'Authorization': `Token ${localStorage.getItem('token')}`}
        });
        authRequest.post(`/words/`, {
          word: word.current.value,
          definition: definition.current.value,
          example: example.current.value,
          user: localStorage.getItem('username')
        })
          .then(() => {
              window.location.href = '/'
          })
          .catch((error: AxiosError) => {
            setMessage(mainMessages[0])
          })
      } else {
        setMessage(wordForm.messages[0])
      }  
    }

    return (
        <Form>
           <Input width='32rem' reference={ word } type='text' placeholder={ wordForm.word } />
           <Input width='32rem' reference={ definition } type='text' placeholder={ wordForm.definition } />
           <Input width='32rem' reference={ example } type='text' placeholder={ wordForm.example } />
           { message && <Message value={ message } setMessageFunc={ setMessage } /> }
           <Button onClickHandler={ click } value='Add' />
        </Form>
    )
}

export default WordForm;