import Image from "next/image";
import styled from "styled-components";

import synthetixLogo from "../../assets/synthetix.svg";

const BottomBar = () => {
  return (
    <BottomBarContainer>
      <DesktopContainer>
        <PoweredBySynthetix>
          <p>Powered By</p>
          <Image alt="Synthetix" src={synthetixLogo} />
        </PoweredBySynthetix>
      </DesktopContainer>
    </BottomBarContainer>
  );
};

const MobileContainer = styled.div`
  padding: 0 40px 20px;
  justify-content: center;
`;

const DesktopContainer = styled.div`
  padding: 0 40px 40px;
  justify-content: space-between;
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
  }
`;

export default BottomBar;
