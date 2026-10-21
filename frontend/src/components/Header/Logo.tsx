import styled from "styled-components";

const Base = styled.div`
  display: flex;
  gap: 7px;
`;

/* Logo */
const Logo = () => (
  <Base>
    <img src="./icon.svg" className="app-icon" style={{ width: "2rem" }} />
    <h1>JobMore</h1>
  </Base>
);

export default Logo;
