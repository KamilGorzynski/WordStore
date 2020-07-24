/** @jsx jsx */
import { jsx } from '@emotion/core'
import { FunctionComponent, useEffect } from 'react'
import Hero from '../containers/Hero'
import bookIcon from '../assets/list.png'
import config from '../config/config'
import WordCard from '../containers/WordCard'


const List: FunctionComponent = () => {

  return (
      <div>
        <Hero header={ config.list.header } paragraph={ config.list.paragraph } img={ bookIcon } />
        <WordCard/>
        <WordCard/>
        <WordCard/>
        <WordCard/>
        <WordCard/>
        <WordCard/>
      </div> 
  );
}

export default List;
