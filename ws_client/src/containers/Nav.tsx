/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import NavLi from '../components/NavLi'
import config from '../config/config'


const Ul = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  height: 3rem;
  justify-content: space-between;
  padding: 0 0.3rem;
  margin-top: 0.5rem;
`

const Nav: FunctionComponent = () => {

    const nav = config.nav

    return (
        <Ul>
            <NavLi className='BlockAncor' exact activeClassName='active' to='/' value={ nav.home }/>
            <NavLi className='BlockAncor' exact activeClassName='active' to='add' value={ nav.add }/>
            <NavLi className='BlockAncor' exact activeClassName='active' to='guess' value={ nav.guess }/>
            <NavLi className='BlockAncor' exact activeClassName='active' to='grammar' value={ nav.grammar }/>
        </Ul>
    )
}

export default Nav;