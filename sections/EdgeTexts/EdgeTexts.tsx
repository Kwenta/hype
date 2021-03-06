import styled, { css } from "styled-components";

const EdgeTexts = () => {
  return (
    <>
      <TopEdgeText>Synthetic Futures</TopEdgeText>
      <LeftEdgeText $vertical>Limitless Assets</LeftEdgeText>
      <RightEdgeText $vertical>Community Owned</RightEdgeText>
      <BottomEdgeText>Unstoppable</BottomEdgeText>
    </>
  );
};

const EdgeText = styled.p<{ $vertical?: boolean }>`
  font-size: 12px;
  font-family: "AkkuratLLWeb-Bold";
  letter-spacing: 12px;
  position: absolute;
  text-transform: uppercase;
  color: #87827c;
  pointer-events: none;

  @media screen and (max-width: 1150px) {
    display: none;
  }

  ${(props) =>
    props.$vertical &&
    css`
      text-orientation: upright;
      writing-mode: vertical-rl;
    `}
`;

const TopEdgeText = styled(EdgeText)`
  top: 40px;
  margin: 0 auto;
`;

const RightEdgeText = styled(EdgeText)`
  right: 35px;
  margin: auto 0;
`;

const BottomEdgeText = styled(EdgeText)`
  bottom: 35px;
  margin: 0 auto;
`;

const LeftEdgeText = styled(EdgeText)`
  left: 35px;
  margin: auto 0;
`;

export default EdgeTexts;
