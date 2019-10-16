import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Form from '../components/Form'
import ButtonLink from '../components/ButtonLink'
import Button, { ButtonContainer } from '../components/Button'

function FinalStep() {
  return (
    <>
      <Head>
        <title>Final Step</title>
      </Head>

      <h1>FINAL Step</h1>

      <Form>Form Here</Form>

      <ButtonContainer>
        <Link href="/step2">
          <ButtonLink>Back</ButtonLink>
        </Link>

        <Button type="submit">Submit</Button>
      </ButtonContainer>
    </>
  )
}

export default FinalStep
