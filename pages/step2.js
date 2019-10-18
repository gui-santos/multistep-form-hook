import React from 'react'
import Link from 'next/link'

import { FormContainer } from '../components/FormStyles'
import ButtonLink from '../components/ButtonLink'
import Button, { ButtonContainer } from '../components/Button'

function Step2() {
  return (
    <FormContainer>
      <h1>Step 2</h1>Form Here
      <ButtonContainer>
        <Link href="/">
          <ButtonLink>Back</ButtonLink>
        </Link>

        <Link href="/finalStep">
          <ButtonLink>Next</ButtonLink>
        </Link>
      </ButtonContainer>
    </FormContainer>
  )
}

export default Step2
