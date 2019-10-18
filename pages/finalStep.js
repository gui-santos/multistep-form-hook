import React from 'react'
import Link from 'next/link'

import { FormContainer } from '../components/FormStyles'
import ButtonLink from '../components/ButtonLink'
import Button, { ButtonContainer } from '../components/Button'

function FinalStep() {
  return (
    <FormContainer>
      <h1>FINAL Step</h1>
      Form Here
      <ButtonContainer>
        <Link href="/step2">
          <ButtonLink>Back</ButtonLink>
        </Link>

        <Button type="submit">Submit</Button>
      </ButtonContainer>
    </FormContainer>
  )
}

export default FinalStep
