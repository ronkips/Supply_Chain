import React from "react";
import StyledInput from "./InputStyled";

interface InputFieldProps {
  placeholder?: string;
  value?: any;
  onchange: (e: string) => void;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onchange,
  type
}) => {
  return (
    <StyledInput
      type={type}
      id="voice-search"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onchange(e.target.value)}
    />
  );
};

export default InputField;
