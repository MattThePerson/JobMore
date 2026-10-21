import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const Base = styled.div`
  background: #0004;
  padding: 4px 2.5rem;
  display: flex;
  /* justify-content: space-between; */
  height: fit-content;
`;

const NavLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 1rem;
`;

const NavLink = styled(Link)`
  padding: 10px 12px;
  height: fit-content;
  text-decoration: none;
  background: #0003;
  font-family: sans-serif;
  border-radius: 5px;
`;

/* Header */
const Header = () => (
  <Base>
    <Link to="/">
      <Logo />
    </Link>
    <NavLinkWrapper>
      <NavLink to="/dashboard">dashboard</NavLink>
      <NavLink to="/kanban">kanban</NavLink>
      <NavLink to="/add">add</NavLink>
      <NavLink to="/login">login</NavLink>
    </NavLinkWrapper>
  </Base>
);

export default Header;
