import { styled } from 'styled-components';

 const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  padding: 10px 25px;
  background-color: blue;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  color: white;
`;
