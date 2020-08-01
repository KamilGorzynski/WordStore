/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { FunctionComponent } from 'react';

const RedH4 = styled.h3`
  color: red;
`

const CloseButton = styled.button`
  color: red;
  font-size: 1.3rem;
  border: none;
  margin: 0.6rem;
  background-color: rgb(245, 245, 245);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: rotate(90deg);
  }
`

type MessageProps = {
    value: string,
    setMessageFunc: Function
  }

const Message: FunctionComponent<MessageProps> = ({ value, setMessageFunc }) => {

  const closeMessage = () => setMessageFunc('')

    return (
      <div css={
        css`display: flex;
         margin: auto;
         justify-content: center;
      `} >
        <RedH4>{ value }</RedH4>
        <CloseButton onClick={ closeMessage }>&#10006;</CloseButton>
      </div>
             
    )
}

export default Message;