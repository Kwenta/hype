import Image from "next/image";
import styled from "styled-components";

import synthetixLogo from "../../assets/synthetix.svg";
import Icons from "../../components/Icons";

const BottomBar = () => {
  return (
    <BottomBarContainer>
      <DesktopContainer>
        <PoweredBySynthetix>
          <p>Powered By</p>
          <Image alt="Synthetix" src={synthetixLogo} />
        </PoweredBySynthetix>
        <OneOfSix>One of Six</OneOfSix>
      </DesktopContainer>
      <MobileContainer>
        <PoweredBySynthetix>
          <p>Powered By</p>
          <Image alt="Synthetix" src={synthetixLogo} />
        </PoweredBySynthetix>
        <Icons />
      </MobileContainer>
    </BottomBarContainer>
  );
};

const MobileContainer = styled.div`
  flex-direction: column;
  padding: 0 40px 20px;
  justify-content: center;
  align-items: center;
`;

const DesktopContainer = styled.div`
  padding: 0 40px 40px;
  justify-content: space-between;
  align-items: center;
`;

const BottomBarContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;

  & > div {
    display: flex;
    flex: 1;
  }

  @media screen and (min-width: 481px) {
    ${MobileContainer} {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    ${DesktopContainer} {
      display: none;
    }
  }
`;

const PoweredBySynthetix = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
    margin-bottom: 2px;
    font-size: 10px;
    text-transform: uppercase;
    color: #ece8e3;
    letter-spacing: 0.64px;
    opacity: 0.5;
  }

  @media screen and (max-width: 480px) {
    align-items: center;

    p {
      text-align: center;
      margin-bottom: 4px;
    }

    margin-bottom: 24px;
  }
`;

const OneOfSix = styled.div`
  font-size: 15.5px;
  letter-spacing: 4px;
  font-family: "AkkuratLLWeb-Bold";
  color: #787878;
  text-transform: uppercase;
`;

export default BottomBar;
