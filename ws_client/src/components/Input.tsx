/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { FunctionComponent } from 'react'

// const Inp = styled.input`
//   width: 32rem;
//   height: 3rem;
//   border: 2px solid grey;
//   background-color: rgb(245, 245, 245);
//   margin: 0.5rem auto;
//   font-size: 1.2rem;
//   border-radius: 0.2rem;
//   display: block;
// `

type ButtonProps = {
    width: string,
    type: string,
    ref?: any,
    value?: string
    placeholder: string
}

const Input: FunctionComponent<ButtonProps> = ({ width, type, ref, value, placeholder }) => {

    return (
      <input
          css={css`
            width: ${width};
            height: 3rem;
            border: 2px solid grey;
            background-color: rgb(245, 245, 245);
            margin: 0.5rem auto;
            font-size: 1.2rem;
            border-radius: 0.2rem;
            display: block;
          `}
          ref={ ref }
          type={ type }
          defaultValue={ value }
          placeholder={ placeholder }
      />
        
        // <Inp ref={ ref } type={ type } defaultValue={ value }  placeholder={ placeholder }/>
    )
}

export default Input;