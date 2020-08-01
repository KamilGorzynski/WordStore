/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { FunctionComponent } from 'react'


type ButtonProps = {
    width: string,
    type: string,
    reference?: any,
    value?: string
    placeholder: string
}

const Input: FunctionComponent<ButtonProps> = ({ width, type, reference, value, placeholder }) => {

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
          ref={ reference }
          type={ type }
          defaultValue={ value }
          placeholder={ placeholder }
      />
    )
}

export default Input;