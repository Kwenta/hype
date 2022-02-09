import styled from "styled-components";
import Image from "next/image";

import communityRaise from "../../assets/community-raise.svg";

const Heading = () => {
  return (
    <>
      <Image alt="Kwenta Community Raise" src={communityRaise} />
      <Description>
        Fund the Kwenta DAO and receive vKWENTA, redeemable for KWENTA at launch
        on April 4th 2022.
      </Description>
    </>
  );
};

const Description = styled.p`
  margin-top: -36px;
  margin-bottom: 32px;
  font-size: 20px;
  line-height: 20px;
  color: #787878;
  text-align: center;
  max-width: 484px;
  width: 100%;
`;

export default Heading;
