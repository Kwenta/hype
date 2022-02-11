import styled from "styled-components";
import Button from "../../components/Button";

const CTA = () => {
  return (
    <CTAContainer>
      <Button variant="secondary">Learn More</Button>
      <Button variant="primary">Aelin Pool</Button>
    </CTAContainer>
  );
};

const CTAContainer = styled.div`
  display: flex;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    margin-bottom: 24px;
  }

  button {
    min-width: 157px;
  }

  button:not(:last-of-type) {
    margin-right: 20px;
  }
`;

export default CTA;
