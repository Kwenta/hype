import styled from "styled-components";

type PoolProgressProps = {};

const PoolProgress: React.FC<PoolProgressProps> = () => {
  return (
    <ProgressContainer>
      <div className="track" />
    </ProgressContainer>
  );
};

const ProgressContainer = styled.div`
  width: 100%;
  background-color: #1d1d1d;
  height: 22px;
  border-radius: 11px;
  box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.08),
    inset 0px 7px 8px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4px;
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
