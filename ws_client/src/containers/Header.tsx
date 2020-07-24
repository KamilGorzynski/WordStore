/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import bookIcon from '../assets/book2.png'
import Nav from './Nav'
import NavLi from '../components/NavLi'

const HeaderContainer = styled.div`
  width: 100%;
  height: 12vh;
  position: fixed;
  margin: 0 auto;
  background-color: rgb(7, 50, 61);
  display: flex;
`

const HeaderDiv = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  justify-content: space-between;
`
const HeaderItemsDiv = styled.div`
  display: flex;
`

const Icon = styled.img`
  width: 3rem;
  margin: 1rem 0;
`

const Header: FunctionComponent = () => {

  return (
    <HeaderContainer>
      <HeaderDiv>
        <HeaderItemsDiv>
          <Icon src={ bookIcon } alt="user"/>
          <Nav />
        </HeaderItemsDiv>
        <HeaderItemsDiv>
          <h2>User</h2>
          
        </HeaderItemsDiv>
      </HeaderDiv>
    </HeaderContainer>
  );
}

export default Header;
