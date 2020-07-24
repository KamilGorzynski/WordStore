/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { FunctionComponent } from 'react';
import NavLi from '../components/NavLi'

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
    return (
        <Ul>
            <NavLi className='BlockAncor' exact activeClassName='active' to='asd1' value='Home'/>
            <NavLi className='BlockAncor' exact activeClassName='active' to='asd2' value='Add'/>
            <NavLi className='BlockAncor' exact activeClassName='active' to='asd3' value='Guess'/>
            <NavLi className='BlockAncor' exact activeClassName='active' to='asd4' value='Grammar'/>
        </Ul>
    )
}

export default Nav;