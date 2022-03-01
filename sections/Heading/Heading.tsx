import styled from "styled-components";

const Heading = () => (
  <>
    <Title>Kwenta</Title>
    <Title style={{ marginBottom: 15 }}>Community Raise</Title>
    <Description>
      You must claim your vKWENTA before Mar 1, 2022 at 7:58PM UTC, or withdraw
      your funds.
    </Description>
  </>
);

const Title = styled.h1`
  font-family: "GT-America-Compressed-Black";
  color: #c9975b;
  font-size: 52px;
  text-align: center;
  text-shadow: 0px 0px 61.4174px rgba(208, 168, 117, 0.35);
  text-transform: uppercase;
  margin: 32px 0 0;

  @media screen and (max-width: 480px) {
    font-size: 44px;
  }
`;

const Description = styled.p`
  margin-bottom: 32px;
  font-size: 16px;
  line-height: 20px;
  color: #787878;
  text-align: center;
  max-width: 484px;
  width: 100%;

  @media screen and (max-width: 480px) {
    font-size: 16px;
    max-width: 360px;
    margin: 5px 0 25px;
  }
`;

export default Heading;
