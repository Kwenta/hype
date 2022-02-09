import styled, { css } from "styled-components";

type ButtonProps = {
  size?: "sm" | "md" | "lg" | "xl";
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "alt"
    | "success"
    | "danger"
    | "text"
    | "select";
  isActive?: boolean;
  isRounded?: boolean;
  mono?: boolean;
  fullWidth?: boolean;
};

const Button = styled.button<ButtonProps>`
  height: 41px;
  cursor: pointer;
  position: relative;
  border-radius: 16px;
  padding: 0 14px;
  box-sizing: border-box;
  text-transform: capitalize;
  outine: none;
  white-space: nowrap;
  font-size: 17px;

  color: ${(props) => props.theme.colors.common.primaryWhite};
  border: ${(props) => props.theme.colors.selectedTheme.border};
  background: ${(props) => props.theme.colors.selectedTheme.button.background};
  box-shadow: ${(props) => props.theme.colors.selectedTheme.button.shadow};

  &:hover {
    background: ${(props) => props.theme.colors.selectedTheme.button.hover};
  }

  &:disabled {
    color: ${(props) => props.theme.colors.selectedTheme.button.disabled.text};
    border: ${(props) => props.theme.colors.selectedTheme.border};
    background: ${(props) =>
      props.theme.colors.selectedTheme.button.disabled.background};
    box-shadow: none;
    cursor: initial;
  }

  ${(props) =>
    props.mono
      ? css`
          font-family: ${props.theme.fonts.mono};
        `
      : css`
          font-family: ${props.theme.fonts.bold};
        `};

  ${(props) =>
    props.variant === "primary" &&
    css`
      background: ${props.theme.colors.selectedTheme.button.primary.background};
      color: ${props.theme.colors.common.primaryWhite};
      text-shadow: ${props.theme.colors.selectedTheme.button.primary
        .textShadow};

      &:hover {
        background: ${props.theme.colors.selectedTheme.button.primary.hover};
      }
    `};

  ${(props) =>
    props.variant === "secondary" &&
    css`
      color: ${props.theme.colors.selectedTheme.button.secondary.text};
    `};

  ${(props) =>
    props.variant === "danger" &&
    css`
      color: ${props.theme.colors.common.primaryRed};
    `};

  ${(props) =>
    props.size === "sm" &&
    css`
      height: 41px;
      min-width: 157px;
    `};

  ${(props) =>
    props.size === "md" &&
    css`
      height: 50px;
      min-width: 200px;
    `};

  ${(props) =>
    props.size === "lg" &&
    css`
      height: 70px;
      min-width: 260px;
      font-size: 19px;
    `};

  ${(props) =>
    props.size === "xl" &&
    css`
      height: 80px;
      min-width: 360px;
      font-size: 21px;
    `};

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `};
`;

export default Button;