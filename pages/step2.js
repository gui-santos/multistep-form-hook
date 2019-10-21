import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import useForm from 'react-hook-form'

import { Store } from '../store'
import { FormContainer, Input, ErrorMsg } from '../components/FormStyles'
import ButtonLink from '../components/ButtonLink'
import Button, { ButtonContainer } from '../components/Button'

function Step2() {
  const { state, dispatch } = React.useContext(Store)
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    dispatch({ type: 'STEP_2', payload: data })
    Router.push('/finalStep')
  }

  return (
    <FormContainer>
      <h1>Step 2</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="email"
          name="email"
          label="Email"
          value={state.step2.email}
          refFunction={register({ required: true })}
        />
        {errors.email && <ErrorMsg>This field is required</ErrorMsg>}

        <ButtonContainer>
          <Link href="/">
            <ButtonLink>Back</ButtonLink>
          </Link>
          <Button type="submit">Next</Button>
        </ButtonContainer>
      </form>
    </FormContainer>
  )
}

export default Step2
