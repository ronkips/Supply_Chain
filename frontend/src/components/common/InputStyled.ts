import styled from "styled-components";

interface StyledInputProps {
  type?: string;
}

export const StyledInput = styled.input<StyledInputProps>`
  background-color: white;
  color: gray;
  font-size: 0.875rem; /* 14px */
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: blue;
  }
`;

export default StyledInput;
