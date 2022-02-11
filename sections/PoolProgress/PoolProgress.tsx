import React from "react";
import styled from "styled-components";
import usePoolCreatedQuery from "../../queries/usePoolCreatedQuery";
import { parsePool } from "../../utils/pools";

type PoolProgressProps = {};

const PoolProgress: React.FC<PoolProgressProps> = () => {
  const poolQuery = usePoolCreatedQuery();

  const pool = React.useMemo(
    () => ((poolQuery.data ?? null) != null ? parsePool(poolQuery.data) : null),
    [poolQuery?.data]
  );

  return (
    <PoolProgressContainer>
      <ProgressContainer>
        <div className="track" />
      </ProgressContainer>
      <PoolProgressText>
        Pool Progress: <span>2.3M</span>/<span>5M</span> sUSD
      </PoolProgressText>
    </PoolProgressContainer>
  );
};

const PoolProgressContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  max-width: 420px;
`;

const PoolProgressText = styled.div`
  text-transform: uppercase;
  text-align: center;
  color: #787878;
  font-size: 15px;

  span {
    color: #ece8e3;
  }
`;

const ProgressContainer = styled.div`
  width: 100%;
  background-color: #1d1d1d;
  height: 22px;
  border-radius: 11px;
  box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.08),
    inset 0px 7px 8px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4px;
  margin-bottom: 13px;
  box-sizing: border-box;

  .track {
    height: 100%;
    border-radius: 7px;
    background: #c9975b;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4),
      inset 0px 1px 0px rgba(255, 255, 255, 0.7);
  }
`;

export default PoolProgress;
