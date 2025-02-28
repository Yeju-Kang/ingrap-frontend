import React from "react";
import PropTypes from "prop-types";
import { Button as MUIButton } from "@mui/material";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "../assets/styles/components/button.scss"; // SCSS 적용

const Button = ({
  children,
  to,
  variant = "contained", // 기본 스타일
  customColor = "var(--primary-color)", // 기본 배경색
  textColor = "var(--text-color)", // 기본 텍스트 색상
  hoverColor = "var(--button-hover)", // ✅ 호버 시 색상 추가
  size = "medium",
  disabled = false,
  fullWidth = false,
  className = "",
  onClick,
  ...props
}) => {
  const buttonClass = classNames("custom-button", className); // SCSS 클래스 적용

  // ✅ 내부적으로 Link 사용 (to 값이 있는 경우)
  if (to) {
    return (
      <Link to={to} className={buttonClass} {...props}>
        <MUIButton
          variant={variant}
          size={size}
          disabled={disabled}
          fullWidth={fullWidth}
          sx={{
            backgroundColor: customColor,
            color: textColor,
            "&:hover": {
              backgroundColor: hoverColor, // ✅ 호버 시 색상 변경 가능
            },
          }}
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
      sx={{
        backgroundColor: customColor,
        color: textColor,
        "&:hover": {
          backgroundColor: hoverColor, // ✅ 호버 시 색상 변경 가능
        },
      }}
    >
      {children}
    </MUIButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string, // 링크 여부
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  customColor: PropTypes.string, // ✅ 커스텀 색상 지원
  textColor: PropTypes.string, // ✅ 텍스트 색상 변경 가능
  hoverColor: PropTypes.string, // ✅ 호버 시 색상 변경 가능
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
