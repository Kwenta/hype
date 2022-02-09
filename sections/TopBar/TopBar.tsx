import styled from "styled-components";
import Icons from "../../components/Icons";

import kwentaLogo from "../../assets/kwenta.svg";
import Image from "next/image";

const TopBar = () => {
  return (
    <TopBarContainer>
      <Image alt="Kwenta" src={kwentaLogo} />
      <Icons />
    </TopBarContainer>
  );
};

const TopBarContainer = styled.div`
  width: 100%;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
`;

export default TopBar;
