import styled from "styled-components";
import Stat from "../../components/Stat";

const Stats = () => {
  return (
    <StatsContainer>
      <Stat value="FEB 14" description="Pool Launch" align="right" />
      <Stat value="FEB 28" description="Pool Close" align="left" />
      <Stat value="0" description="Vesting Period" mono align="right" />
      <Stat value="5m" description="Pool Cap" mono align="left" />
      <Stat value="5%" description="Of Total Supply" mono align="right" />
      <Stat value="100m" description="SUSD Valuation" mono align="left" />
    </StatsContainer>
  );
};

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 22px;
`;

export default Stats;
