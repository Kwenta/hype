import styled from "styled-components";

type StatProps = {
  value: string;
  description: string;
};

const Stat: React.FC<StatProps> = ({ value, description }) => {
  return (
    <StatContainer>
      <Value>{value}</Value>
      <Description>{description}</Description>
    </StatContainer>
  );
};

const StatContainer = styled.div``;

const Value = styled.div`
  font-size: 38px;
  color: #ece8e3;
  margin-bottom: 12px;
`;

const Description = styled.div`
  font-size: 15px;
  text-transform: uppercase;
  color: #787878;
`;

export default Stat;
