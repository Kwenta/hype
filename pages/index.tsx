import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import Heading from "../sections/Heading";
import CTA from "../sections/CTA";
import NeonIcon from "../components/NeonIcon";
import Audit from "../components/Audit";
import TopBar from "../sections/TopBar";
import EdgeTexts from "../sections/EdgeTexts";
import BottomBar from "../sections/BottomBar";
import MobileBottomBar from "../sections/MobileBottomBar";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>Kwenta Futures Beta</title>
        <meta name="description" content="Kwenta Futures Beta" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#131212" />
      </Head>

      <TopBar />
      <EdgeTexts />

      <StyledMain>
        <NeonIcon />
        <Heading />
        <CTA />
        <Audit />
        <Disclaimer>
          Note: This product is a work-in-progress. It is subject to open interest caps and code
          changes. It should only be used to test the platform and not for active trading. 
        </Disclaimer>
        <MobileBottomBar />
      </StyledMain>

      <BottomBar />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    .topBar {
      display: none;
    }
  }
`;

const StyledMain = styled.main`
  margin: 0 auto;
  max-width: 740px;
  height: 100%;
  width: 100%;
  padding: 70px 20px 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Disclaimer = styled.div`
  font-size: 14px;
  line-height: 15px;
  color: #87827c;
  text-align: center;
  max-width: 700px;
  width: 100%;
  text-transform: uppercase;

  @media screen and (max-width: 480px) {
    max-width: 340px;
  }
`;

export default Home;
