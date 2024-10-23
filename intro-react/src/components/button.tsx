import styled from "styled-components";

const StyledButton = styled.button`
  background-color: white;
  font-size: 15px;
  color: black;
  border-radius: 10%;
`;

function Button() {
  return <StyledButton>Login</StyledButton>;
}

export default Button;
