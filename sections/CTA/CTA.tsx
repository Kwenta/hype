import styled from "styled-components";
import Button from "../../components/Button";
import { KWENTA_AELIN_POOL } from "../../constants/addresses";

const CTA: React.FC = () => (
  <CTAContainer>
    <a href="https://docs.kwenta.io" target="_blank" rel="noreferrer">
      <Button variant="secondary">Learn More</Button>
    </a>
    <a
      href={`https://aelin.xyz/pools/${KWENTA_AELIN_POOL}`}
      target="_blank"
      rel="noreferrer"
    >
      <Button variant="primary">Aelin Pool</Button>
    </a>
  </CTAContainer>
);

const CTAContainer = styled.div`
  display: flex;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    margin-bottom: 24px;
  }

  button {
    min-width: 157px;
  }

  a:not(:last-of-type) {
    margin-right: 20px;
  }
`;

export default CTA;
