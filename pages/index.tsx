import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import Heading from "../sections/Heading";
import PoolProgress from "../sections/PoolProgress";
import Stats from "../sections/Stats";
import CTA from "../sections/CTA";
import NeonIcon from "../components/NeonIcon";
import TopBar from "../sections/TopBar";
import EdgeTexts from "../sections/EdgeTexts";
import BottomBar from "../sections/BottomBar";
import MobileBottomBar from "../sections/MobileBottomBar";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>Kwenta Community Raise</title>
        <meta name="description" content="Kwenta Community Raise" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#131212" />
      </Head>

      <TopBar />
      <EdgeTexts />

      <StyledMain>
        <NeonIcon />
        <Heading />
        <Stats />
        <PoolProgress />
        <CTA />
        <MobileBottomBar />
      </StyledMain>

      <BottomBar />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  height: 100vh;
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
  max-width: 600px;
  height: 100%;
  width: 100%;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Home;
