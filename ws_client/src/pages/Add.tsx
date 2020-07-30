/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import Hero from '../containers/Hero'
import WordForm from '../containers/WordForm'
import iconSrc from '../assets/add.png'
import config from '../config/config'




const Add: FunctionComponent = () => {

    return (
        <div>
            <Hero header={ config.add.header } paragraph={ config.list.paragraph } img={ iconSrc } />
            <WordForm />
        </div>
    )
}

export default Add;