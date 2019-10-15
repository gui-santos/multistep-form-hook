import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";

import ButtonLink from "../components/ButtonLink";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Home = () => (
  <>
    <Head>
      <title>Step 1</title>
    </Head>

    <h1>Step 1</h1>

    <div>Form Here</div>

    <ButtonContainer>
      <Link href="/step2">
        <ButtonLink>Next</ButtonLink>
      </Link>
    </ButtonContainer>
  </>
);

export default Home;
