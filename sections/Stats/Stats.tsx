import styled from "styled-components";
import Stat from "../../components/Stat";

const Stats = () => {
  return (
    <StatsContainer>
      <Stat value="FEB 14" description="Pool Launch" align="right" />
      <Stat value="FEB 27" description="Pool Close" align="left" />
      <Stat value="0" description="Vesting Period" mono align="right" />
      <Stat
        value="5m"
        description="sUSD POOL GOAL"
        noUppercase
        mono
        align="left"
      />
      <Stat
        value="5%"
        description="Of Total Initial Supply"
        mono
        align="right"
      />
      <Stat
        value="100m"
        description="sUSD VALUATION"
        noUppercase
        mono
        align="left"
      />
    </StatsContainer>
  );
};

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 480px) {
    grid-gap: 15px;
  }
`;

export default Stats;
