/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { FunctionComponent } from 'react';
import NavLi from '../components/NavLi'

const Ul = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  justify-content: space-between;
  padding: 0 0.3rem;
`

const Nav: FunctionComponent = () => {
    return (
        <Ul>
            <NavLi className='BlockAncor' exact activeClassName='active' to='asd1' value='test1'/>
            <NavLi className='BlockAncor' exact activeClassName='active' to='asd2' value='test2'/>
            <NavLi className='BlockAncor' exact activeClassName='active' to='asd3' value='test3'/>
            <NavLi className='BlockAncor' exact activeClassName='active' to='asd4' value='test4'/>
        </Ul>
    )
}

export default Nav;