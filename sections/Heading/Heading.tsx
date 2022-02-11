import styled from "styled-components";
import Image from "next/image";

import communityRaise from "../../assets/community-raise.svg";

const Heading = () => {
  return (
    <>
      <Title style={{ margin: "32px 0 0" }}>Kwenta</Title>
      <Title style={{ marginBottom: 15 }}>Community Raise</Title>
      {/* <Image alt="Kwenta Community Raise" src={communityRaise} /> */}
      <Description>
        Fund the Kwenta DAO and receive vKWENTA, redeemable for KWENTA at launch
        on April 4th 2022.
      </Description>
    </>
  );
};

const Title = styled.h1`
  font-family: "GT-America-Compressed-Black";
  color: #c9975b;
  font-size: 62px;
  text-align: center;
  text-shadow: 0px 0px 61.4174px rgba(208, 168, 117, 0.35);
  text-transform: uppercase;

  @media screen and (max-width: 480px) {
    font-size: 44px;
  }
`;

const Description = styled.p`
  /* margin-top: -36px; */
  margin-bottom: 32px;
  font-size: 20px;
  line-height: 20px;
  color: #787878;
  text-align: center;
  max-width: 484px;
  width: 100%;

  @media screen and (max-width: 480px) {
    font-size: 15px;
    max-width: 300px;
  }
`;

export default Heading;
