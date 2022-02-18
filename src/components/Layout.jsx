import {NavLink, Outlet} from "react-router-dom";
import styled from "styled-components";


const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-left: 10px;

`

const Link = styled(NavLink)`
  &.active {
    color: tomato;
  }
`

export const Layout = () => {
  return (
    <div>
      <Nav>
        <Link to='/preview'>Preview</Link>
        <Link to='/create'>Create</Link>
        <Link to='/list'>List</Link>
      </Nav>
      <Outlet/>

    </div>
  );
};
