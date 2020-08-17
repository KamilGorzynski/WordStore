/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { FunctionComponent, useRef, useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Message from '../components/Message'
import config from '../config/config'
import axios from 'axios'


const Form = styled.div`
  margin: 3rem auto;
  width: 40rem;
  text-align: center;
`

type WordFormProps = {
  wordParams?: any,
  buttonValue: string
}


const WordForm: FunctionComponent<WordFormProps> = ({ wordParams, buttonValue }) => {

  const [message, setMessage] = useState<string>(''); 
  const word = useRef<any>(null)
  const definition = useRef<any>(null)
  const example = useRef<any>(null)
  const { wordForm, mainMessages } = config


    const click = () => {
      const wordValue: string = word.current.value
      const definitionValue: string = definition.current.value
      if (wordValue && definitionValue) {
        const wordObject = {
          word: word.current.value,
          definition: definition.current.value,
          example: example.current.value,
          user: localStorage.getItem('username')
        }
        const authRequest = axios.create({
          baseURL: 'http://localhost:8000',
          headers: {'Authorization': `Token ${localStorage.getItem('token')}`}
        })       
        if (buttonValue === 'Add') {
          authRequest.post(`/words/`, wordObject)
            .then(() => window.location.href = '/')
            .catch(() => setMessage(mainMessages[0]))
        } else {
          authRequest.put(`/words/${wordParams.id}/`, wordObject)
            .then(() => window.location.href = '/')
            .catch(() => setMessage(mainMessages[0]))
        }
        
      } else {
        setMessage(wordForm.messages[0])
      }  
    }

    return (
        <Form>
           <Input width='32rem' value={ wordParams ? wordParams.word : '' } reference={ word } type='text' placeholder={ wordForm.word } />
           <Input width='32rem' value={ wordParams ? wordParams.definition : '' } reference={ definition } type='text' placeholder={ wordForm.definition } />
           <Input width='32rem' value={ wordParams ? wordParams.example : '' } reference={ example } type='text' placeholder={ wordForm.example } />
           { message && <Message value={ message } setMessageFunc={ setMessage } /> }
           <Button onClickHandler={ click } value={ buttonValue } />
        </Form>
    )
}

export default WordForm;