import React from "react";
import styled from "styled-components";
import usePoolBalancesQuery from "../../queries/usePoolBalancesQuery";
import { transformToMetric } from "../../utils/numbers";

const PoolProgress: React.FC = () => {
  const poolBalancesQuery = usePoolBalancesQuery();
  const poolBalances = poolBalancesQuery?.data ?? null;

  const poolProgress = React.useMemo(
    () => poolBalances?.totalSupply ?? 0,
    [poolBalances]
  );

  const poolProgressPercent = React.useMemo(() => {
    return Number(((poolProgress ?? 0) / 5000000).toFixed(2)) * 100;
  }, [poolProgress]);

  return (
    <PoolProgressContainer>
      <ProgressContainer>
        <div
          className="track"
          style={{
            width: `${poolProgressPercent > 100 ? 100 : poolProgressPercent}%`,
          }}
        />
      </ProgressContainer>
      <PoolProgressText>
        Pool Progress:{" "}
        <span className="value">{transformToMetric(poolProgress, 2)}</span>/
        <span className="value">5M</span> <span className="currency">sUSD</span>
      </PoolProgressText>
    </PoolProgressContainer>
  );
};

const PoolProgressContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  max-width: 420px;

  @media screen and (max-width: 480px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const PoolProgressText = styled.div`
  text-transform: uppercase;
  text-align: center;
  color: #787878;
  font-size: 12px;

  .value {
    color: #ece8e3;
  }

  .currency {
    text-transform: initial;
  }
`;

const ProgressContainer = styled.div`
  width: 100%;
  background-color: #1d1d1d;
  height: 20px;
  border-radius: 11px;
  box-shadow: inset 0px 7px 8px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4px;
  margin-bottom: 10px;
  box-sizing: border-box;

  .track {
    height: 100%;
    min-width: 2%;
    border-radius: 7px;
    background: #c9975b;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4),
      inset 0px 1px 0px rgba(255, 255, 255, 0.7);
  }
`;

export default PoolProgress;
