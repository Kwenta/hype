import styled, { css } from "styled-components";

type StatProps = {
  value: string;
  description: string;
  mono?: boolean;
  noUppercase?: boolean;
  align: "left" | "right";
};

const Stat: React.FC<StatProps> = ({
  value,
  description,
  mono,
  noUppercase,
  align,
}) => (
  <StatContainer $align={align}>
    <Value $mono={mono}>{value}</Value>
    <Description $noUppercase={noUppercase}>{description}</Description>
  </StatContainer>
);

const StatContainer = styled.div<{ $align: "left" | "right" }>`
  div {
    text-align: ${(props) => props.$align};
  }
`;

const Value = styled.div<{ $mono?: boolean }>`
  font-size: 30px;
  color: #ece8e3;
  margin-bottom: 5px;

  ${(props) =>
    props.$mono &&
    css`
      font-family: "AkkuratMonoLLWeb-Regular";
    `};

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

const Description = styled.div<{ $noUppercase?: boolean }>`
  font-size: 12px;
  text-transform: uppercase;
  color: #787878;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }

  ${(props) =>
    props.$noUppercase &&
    css`
      text-transform: initial;
    `}
`;

export default Stat;
