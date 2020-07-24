/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { FunctionComponent, useContext } from 'react'
import { StoreContext } from '../context'
import bookIcon from '../assets/book3.png'
import Nav from './Nav'
import NavLi from '../components/NavLi'
import config from '../config/config'

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
  width: 4rem;
  margin: 1rem 0;
`

const Ul = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  margin-top: 0.5rem;
  justify-content: space-between;
  padding: 0 0.3rem;
`

const LogOutHeader = styled.h2`
  color: rgb(93, 190, 1);
  margin: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underscore;
  }
`

const Header: FunctionComponent = () => {

  const { state } = useContext(StoreContext);
  
  const logOutUser = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    window.location.reload()
  }

  return (
    <HeaderContainer>
      <HeaderDiv>
        <HeaderItemsDiv>
          <Icon src={ bookIcon } alt="user"/>
          <Nav />
        </HeaderItemsDiv>
        <HeaderItemsDiv>
          <Ul>
            <NavLi className='BlockAncor' activeClassName='active' to='asd1' value={ state.userName }/>
            <LogOutHeader onClick={ logOutUser }>{ config.nav.log_out }</LogOutHeader>
          </Ul>
          
        </HeaderItemsDiv>
      </HeaderDiv>
    </HeaderContainer>
  );
}

export default Header;
