import Image from "next/image";
import styled, { css } from "styled-components";
import auditLogo from "../../assets/audit.svg";

const Audit = () => {
  return (
    <AuditContainer>
      <span>Fully audited by:</span>
      <Image alt="Iosiro" src={auditLogo}/>
    </AuditContainer>
  );
};

const AuditContainer = styled.div`
  font-size: 16px;
  color: #7fd482;
  text-align: center;
  padding: 70px 0px 140px;

  span {
    padding-bottom: 8px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Audit;
