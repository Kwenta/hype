import styled, { css } from "styled-components";

type StatProps = {
  value: string;
  description: string;
  mono?: boolean;
  align: "left" | "right";
};

const Stat: React.FC<StatProps> = ({ value, description, mono, align }) => (
  <StatContainer $align={align}>
    <Value $mono={mono}>{value}</Value>
    <Description>{description}</Description>
  </StatContainer>
);

const StatContainer = styled.div<{ $align: "left" | "right" }>`
  div {
    text-align: ${(props) => props.$align};
  }
`;

const Value = styled.div<{ $mono?: boolean }>`
  font-size: 38px;
  color: #ece8e3;
  margin-bottom: 12px;

  ${(props) =>
    props.$mono &&
    css`
      font-family: "AkkuratMonoLLWeb-Regular";
    `};
`;

const Description = styled.div`
  font-size: 15px;
  text-transform: uppercase;
  color: #787878;
`;

export default Stat;
