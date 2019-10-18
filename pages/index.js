import React from 'react'
import useForm from 'react-hook-form'
import Router from 'next/router'

import {
  FormContainer,
  LabelledInput,
  ErrorMsg,
} from '../components/FormStyles'
import Button, { ButtonContainer } from '../components/Button'

function Home() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    console.log(data)
    Router.push('/step2')
  }

  return (
    <FormContainer>
      <h1>Step 1</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LabelledInput
          id="firstName"
          name="firstName"
          label="First Name"
          refFunction={register({ required: true })}
        />
        {errors.firstName && <ErrorMsg>This field is required</ErrorMsg>}

        <LabelledInput
          id="lastName"
          name="lastName"
          label="Last Name"
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
