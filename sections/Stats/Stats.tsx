import styled from "styled-components";
import Stat from "../../components/Stat";

const Stats = () => {
  return (
    <StatsContainer>
      <Stat value="2/14/22" description="Pool Launch" />
      <Stat value="2/27/22" description="Pool Close" />
      <Stat value="0" description="Vesting Period" />
      <Stat value="5m" description="Pool Cap" />
      <Stat value="5%" description="Of Total Supply" />
      <Stat value="100m" description="SUSD Valuation" />
    </StatsContainer>
  );
};

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 18px;
`;

export default Stats;
