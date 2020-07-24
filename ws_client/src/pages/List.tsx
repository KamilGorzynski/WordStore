/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import Hero from '../containers/Hero'
import bookIcon from '../assets/list.png'
import config from '../config/config'

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: rgb(245, 245, 245);
`

const List: FunctionComponent = () => {

  return (
      <div>
        <Hero header={ config.list.header } paragraph={ config.list.paragraph } img={ bookIcon } />
        cos tam jeszcze
      </div> 
  );
}

export default List;
