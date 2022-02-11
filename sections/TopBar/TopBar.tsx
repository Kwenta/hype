import styled from "styled-components";
import Image from "next/image";

import Icons from "../../components/Icons";

import kwentaLogo from "../../assets/kwenta.svg";
import kwentaLogo2 from "../../assets/kwenta-logo-2.svg";

const TopBar: React.FC = () => (
  <TopBarContainer className="topBar">
    <DesktopContainer>
      <Image alt="Kwenta" src={kwentaLogo} />
      <Icons />
    </DesktopContainer>
    <MobileContainer>
      <Image alt="Kwenta" src={kwentaLogo2} />
    </MobileContainer>
  </TopBarContainer>
);

const MobileContainer = styled.div`
  padding: 20px 40px 0;
  justify-content: center;
`;

const DesktopContainer = styled.div`
  padding: 40px 40px 0;
  justify-content: space-between;
`;

const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: 0;

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

export default TopBar;
