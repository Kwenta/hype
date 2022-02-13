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

  color: #ece8e3;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(180deg, #282727 0%, #191818 100%);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25),
    inset 0px 1px 0px rgba(255, 255, 255, 0.08),
    inset 0px 0px 20px rgba(255, 255, 255, 0.03);

  &:hover {
    background: linear-gradient(
      180deg,
      #383838 0%,
      #383838 0.01%,
      #1e1e1e 100%
    );
  }

  &:disabled {
    color: #555555;
    border: rgba(255, 255, 255, 0.1);
    background: #272727;
    box-shadow: none;
    cursor: initial;

    &:hover {
      color: #555555;
      border: rgba(255, 255, 255, 0.1);
      background: #272727;
      box-shadow: none;
      cursor: default;
    }
  }

  ${(props) =>
    props.mono
      ? css`
          font-family: AkkuratMonoLLWeb-Regular;
        `
      : css`
          font-family: AkkuratLLWeb-Bold;
        `};

  ${(props) =>
    props.variant === "primary" &&
    css`
      background: linear-gradient(180deg, #be9461 0%, #9c6c3c 100%);
      color: #ece8e3;
      text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);

      &:hover {
        background: linear-gradient(180deg, #e4b378 0%, #b98c55 100%);
      }
    `};

  ${(props) =>
    props.variant === "secondary" &&
    css`
      color: #c9975b;
    `};

  ${(props) =>
    props.variant === "danger" &&
    css`
      color: #ef6868;
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
