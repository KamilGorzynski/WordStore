/** @jsx jsx */
import { jsx } from '@emotion/core'
import { FunctionComponent } from 'react'
import Hero from '../containers/Hero'
import WordForm from '../containers/WordForm'
import iconSrc from '../assets/modify.png'
import config from '../config/config'

type ModifyProps = {
    location: any
  }

const Modify: FunctionComponent<ModifyProps> = ({location}) => {
    return (
        <div>
            <Hero header={ config.modify.header } paragraph={ config.modify.paragraph } img={ iconSrc } />
            <WordForm buttonValue='Modify' wordParams={ location.state }/>
        </div>
    )
}

export default Modify;