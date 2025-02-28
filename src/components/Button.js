import React from "react";
import PropTypes from "prop-types";
import { Button as MUIButton } from "@mui/material";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "../assets/styles/components/button.scss"; // SCSS 적용

const Button = ({
  children,
  to,
  variant = "contained",
  customColor = "var(--primary-color)",
  textColor = "var(--text-color)",
  hoverColor = "var(--button-hover)",
  size = "medium",
  disableClickEffect= false, 
  disabled = false,
  fullWidth = false,
  className = "",
  onClick,
  ...props
}) => {
  const buttonClass = classNames("custom-button", className);

  const buttonStyles = {
    backgroundColor: customColor,
    color: textColor,
    "&:hover": {
      backgroundColor: hoverColor,
    },
   
  };

  if (to) {
    return (
      <Link to={to} className={buttonClass} {...props}>
        <MUIButton
          variant={variant}
          size={size}
          disabled={disabled}
          fullWidth={fullWidth}
          sx={buttonStyles}
        >
          {children}
        </MUIButton>
      </Link>
    );
  }

  return (
    <MUIButton
      className={buttonClass}
      variant={variant}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      {...props}
      sx={buttonStyles}
      disableRipple={disableClickEffect}
    >
      {children}
    </MUIButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  customColor: PropTypes.string,
  textColor: PropTypes.string,
  hoverColor: PropTypes.string,
  disableClickEffect: PropTypes.bool, 
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
