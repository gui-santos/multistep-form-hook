import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Form from '../components/Form'
import ButtonLink from '../components/ButtonLink'
import Button, { ButtonContainer } from '../components/Button'

function Step2() {
  return (
    <>
      <Head>
        <title>Step 2</title>
      </Head>

      <h1>Step 2</h1>

      <Form>Form Here</Form>

      <ButtonContainer>
        <Link href="/">
          <ButtonLink>Back</ButtonLink>
        </Link>

        <Link href="/finalStep">
          <ButtonLink>Next</ButtonLink>
        </Link>
      </ButtonContainer>
    </>
  )
}

export default Step2
