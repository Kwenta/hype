import styled from "styled-components";

const Heading = () => {
  return (
    <>
      <Title>Kwenta</Title>
      <Title>Community Raise</Title>
      <Description>
        Fund the Kwenta DAO and receive vKWENTA, redeemable for KWENTA at launch
        on April 4th 2022.
      </Description>
    </>
  );
};

const Title = styled.h1`
  font-size: 60px;
  color: #c9975b;
  text-shadow: 0px 0px 73.2873px rgba(208, 168, 117, 0.35);
  text-align: center;
  text-transform: uppercase;
`;

const Description = styled.p`
  margin: 0;
  margin-top: 16px;
  margin-bottom: 32px;
  font-size: 15px;
  color: #787878;
  text-align: center;
`;

export default Heading;
