import React from "react";
import PropTypes from "prop-types";
import { Button as MUIButton } from "@mui/material";
import { Link } from "react-router-dom";
import classNames from "classnames";

const CustomButton = ({
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
      </Link>
    );
  }
};

CustomButton.propTypes = {
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

export default CustomButton;
