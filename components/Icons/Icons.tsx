import styled from "styled-components";
import Image from "next/image";

import discordIcon from "../../assets/discord.svg";
import twitterIcon from "../../assets/twitter.svg";
import githubIcon from "../../assets/github.svg";
import gitbookIcon from "../../assets/gitbook.svg";

const Icons: React.FC = () => (
  <IconsContainer>
    <a href="https://twitter.com/kwenta_io" target="_blank" rel="noreferrer">
      <Image alt="twitter" src={twitterIcon} />
    </a>
    <a href="https://docs.kwenta.io" target="_blank" rel="noreferrer">
      <Image alt="gitbook" src={gitbookIcon} />
    </a>
    <a href="https://discord.gg/kwenta" target="_blank" rel="noreferrer">
      <Image alt="discord" src={discordIcon} />
    </a>
    <a href="https://github.com/Kwenta" target="_blank" rel="noreferrer">
      <Image alt="github" src={githubIcon} />
    </a>
  </IconsContainer>
);

const IconsContainer = styled.div`
  height: 24px;
  display: grid;
  grid-template-columns: repeat(4, 24px);
  grid-gap: 45px;

  
  img:hover {
    cursor: pointer;
    filter: invert(24%) sepia(91%) saturate(211%) hue-rotate(349deg) brightness(100%) contrast(79%)
}
`;

export default Icons;
