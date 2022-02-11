import Image from "next/image";
import styled from "styled-components";

import Icons from "../../components/Icons";
import synthetixLogo from "../../assets/synthetix.svg";

const MobileBottomBar = () => {
  return (
    <Container>
      <PoweredBySynthetix>
        <p>Powered By</p>
        <Image alt="Synthetix" src={synthetixLogo} />
      </PoweredBySynthetix>
      <Icons />
    </Container>
  );
};

const Container = styled.div`
  flex-direction: column;
  padding: 20px 40px 0;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 481px) {
    display: none;
  }
`;

const PoweredBySynthetix = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;

  p {
    margin: 0;
    font-size: 10px;
    text-transform: uppercase;
    color: #ece8e3;
    letter-spacing: 0.64px;
    opacity: 0.5;
    text-align: center;
    margin-bottom: 4px;
  }
`;

export default MobileBottomBar;
