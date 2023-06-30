import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavLink } from "react-router-dom";
import css from './Header.module.css';
import styled from 'styled-components';

function Header () {

  const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;

    return (
        <nav>
        <ul className={css.list}>
          <li>
            <StyledLink className={css.link} to="/">
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink className={css.link} to="/movies">
              Movies
            </StyledLink>
          </li>
        </ul>
        <Suspense>
        <Outlet />
      </Suspense>
      </nav>
    );

}

export default Header;