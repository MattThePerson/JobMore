import styled from "styled-components";
import Logo from "./Logo";

const Base = styled.div`
  background: red;
`;

/* Header */
const Header = () => (
  <Base>
    <Logo />
  </Base>
);

export default Header;
