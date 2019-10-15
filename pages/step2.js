import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";

import ButtonLink from "../components/ButtonLink";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Step2 = () => (
  <>
    <Head>
      <title>Step 2</title>
    </Head>

    <h1>Step 2</h1>

    <div>Form Here</div>

    <ButtonContainer>
      <Link href="/">
        <ButtonLink>Back</ButtonLink>
      </Link>

      <Link href="/step3">
        <ButtonLink>Next</ButtonLink>
      </Link>
    </ButtonContainer>
  </>
);

export default Step2;
