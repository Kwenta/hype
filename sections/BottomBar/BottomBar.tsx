import Image from "next/image";
import styled from "styled-components";

import synthetixLogo from "../../assets/synthetix.svg";

const BottomBar: React.FC = () => {
  return (
    <BottomBarContainer>
      <PoweredBySynthetix>
        <p>Powered By</p>
        <Image alt="Synthetix" src={synthetixLogo} />
      </PoweredBySynthetix>
      <OneOfSix>
        <p>One<span> of Six</span></p>
      </OneOfSix>
    </BottomBarContainer>
  );
};

const BottomBarContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  padding: 0 40px 40px;
  justify-content: space-between;
  align-items: end;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const PoweredBySynthetix = styled.div`
  display: flex;
  flex-direction: column;
  width: 130px;

  p {
    margin: 0px;
    font-size: 10px;
    text-transform: uppercase;
    color: #ece8e3;
    letter-spacing: 0.64px;
    opacity: 0.5;
  }
`;

const OneOfSix = styled.div`
  p {
    margin: 0px;
    font-size: 13px;
    letter-spacing: 4px;
    font-family: "AkkuratLLWeb-Bold";
    color: #787878;
    text-transform: uppercase;  
  }
  

  span {
    color: #39332D;
  }
`;

export default BottomBar;
