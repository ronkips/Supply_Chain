import styled from "styled-components";

interface StyledButtonProps {
  textColor?: string;
  bgColor?: string;
  disabled?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  background-color: ${({ disabled, bgColor }) =>
    disabled ? "#ccc" : bgColor || "blue"};
  color: ${({ textColor }) => textColor || "white"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border: none;
`;
export default StyledButton;
