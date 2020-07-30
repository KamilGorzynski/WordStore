/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import config from '../config/config'

const Form = styled.div`
  margin: 3rem auto;
  width: 40rem;
  text-align: center;
`




const WordForm: FunctionComponent = () => {
    const click = () => console.log('test')

    return (
        <Form>
           <Input width='32rem' type='text' placeholder='Word' />
           <Input width='32rem' type='text' placeholder='Definition' />
           <Input width='32rem' type='text' placeholder='Example' />
           <Button onClickHandler={ click } value='Add' />
        </Form>
    )
}

export default WordForm;