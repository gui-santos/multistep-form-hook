import React, { useContext } from 'react'
import Link from 'next/link'

import { Store } from '../store'
import FormContainer from '../components/form/FormContainer'
import ButtonLink from '../components/ButtonLink'
import Button, { ButtonContainer } from '../components/Button'

function FinalStep() {
  const { state } = useContext(Store)

  return (
    <FormContainer>
      <h1>FINAL Step</h1>

      <div>
        name: {state.step1.firstName} {state.step1.lastName}
      </div>
      <div>email: {state.step2.email}</div>

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
