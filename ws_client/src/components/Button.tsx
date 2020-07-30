/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { FunctionComponent } from 'react'

const Btn = styled.button`
  background-color: rgb(30, 170, 93);
  color: white;
  width: 18rem;
  height: 3rem;
  margin: 0.5rem 0 1rem 0;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 0.2rem;
`

type ButtonProps = {
    onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
    value: string
}

const Button: FunctionComponent<ButtonProps> = ({ onClickHandler, value }) => {

    return (
        <Btn onClick={ onClickHandler }>{ value }</Btn>
    )
}

export default Button;