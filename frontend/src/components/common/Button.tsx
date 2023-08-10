import React from "react";
import StyledButton from "./ButtonStyled";
interface ButtonProps {
  title: string;
  textColor?: string;
  bgColor?: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  textColor,
  onClick,
  disabled,
  bgColor
}) => {
  return (
    <StyledButton
      disabled={disabled}
      bgColor={bgColor}
      textColor={textColor}
      onClick={onClick}
    >
      {title}
    </StyledButton>
  );
};

export default Button;
