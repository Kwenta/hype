import styled from "styled-components";
import Image from "next/image";

import discordIcon from "../../assets/discord.svg";
import twitterIcon from "../../assets/twitter.svg";
import githubIcon from "../../assets/github.svg";
import gitbookIcon from "../../assets/gitbook.svg";

const Icons: React.FC = () => (
  <IconsContainer>
    <Image alt="twitter" src={twitterIcon} />
    <Image alt="gitbook" src={gitbookIcon} />
    <Image alt="discord" src={discordIcon} />
    <Image alt="github" src={githubIcon} />
  </IconsContainer>
);

const IconsContainer = styled.div`
  height: 24px;
  display: grid;
  grid-template-columns: repeat(4, 24px);
  grid-gap: 45px;
`;

export default Icons;
