/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { FunctionComponent } from 'react';

const Li = styled.li`
  color: white;
  width: 8rem;
  display: block;
  text-decoration: none;
  text-align: center;
  font-size: 1.4rem;
  padding-top: 0.5rem;
  margin: 0 0.3rem;
`

type LiProps = {
    className?: string,
    exact?: boolean,
    activeClassName?: string | undefined,
    to: string,
    value?: string
  }

const NavLi: FunctionComponent<LiProps> = ({ className, exact, activeClassName, to, value }) => {
    return (
        <Li>
            <NavLink className={ className } exact={ exact } activeClassName={ activeClassName } to={ to } >{ value }</NavLink>
        </Li>           
    )
}

export default NavLi;