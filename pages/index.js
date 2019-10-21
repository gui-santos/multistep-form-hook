import React from 'react'
import useForm from 'react-hook-form'
import Router from 'next/router'

import { Store } from '../store'
import { FormContainer, Input, ErrorMsg } from '../components/FormStyles'
import Button, { ButtonContainer } from '../components/Button'

function Home() {
  const { state, dispatch } = React.useContext(Store)
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    dispatch({ type: 'STEP_1', payload: data })
    Router.push('/step2')
  }

  return (
    <FormContainer>
      <h1>Step 1</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="firstName"
          name="firstName"
          label="First Name"
          value={state.step1.firstName}
          refFunction={register({ required: true })}
        />
        {errors.firstName && <ErrorMsg>This field is required</ErrorMsg>}

        <Input
          id="lastName"
          name="lastName"
          label="Last Name"
          value={state.step1.lastName}
          refFunction={register({ required: true })}
        />
        {errors.lastName && <ErrorMsg>This field is required</ErrorMsg>}

        <ButtonContainer align="flex-end">
          <Button type="submit">Next</Button>
        </ButtonContainer>
      </form>
    </FormContainer>
  )
}

export default Home
