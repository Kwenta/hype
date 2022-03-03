import styled from "styled-components";
import Button from "../../components/Button";
import { KWENTA_AELIN_POOL } from "../../constants/addresses";

const CTA: React.FC = () => (
  <CTAContainer>
    <a
      href="https://docs.kwenta.io/tokenomics/sovereignty/aelin-raise"
      target="_blank"
      rel="noreferrer"
    >
      <Button variant="secondary">
        <p>Learn More</p>
      </Button>
    </a>
    <a
      href={`https://app.aelin.xyz/pools/${KWENTA_AELIN_POOL}/optimism`}
      target="_blank"
      rel="noreferrer"
    >
      <Button variant="primary">
        <p>Aelin Pool</p>
      </Button>
    </a>
  </CTAContainer>
);

const CTAContainer = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    margin-bottom: 11px;
  }

  button {
    min-width: 157px;
    p {
      margin: 0 0 2.8px;
    }
  }

  a:not(:last-of-type) {
    margin-right: 20px;

    @media screen and (max-width: 480px) {
      margin-right: 15px;
    }
  }
`;

export default CTA;
