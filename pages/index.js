import React, { useContext } from 'react'
import useForm from 'react-hook-form'
import Router from 'next/router'

import { Store } from '../store'
import FormContainer from '../components/form/FormContainer'
import TextInput from '../components/form/TextInput'
import Button, { ButtonContainer } from '../components/Button'

function Home() {
  const { state, dispatch } = useContext(Store)
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    dispatch({ type: 'STEP_1', payload: data })
    Router.push('/step2')
  }

  return (
    <FormContainer>
      <h1>Step 1</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          name="firstName"
          label="First Name"
          value={state.step1.firstName}
          refFunction={register({
            required: { value: true, message: 'You need to tell us your name' },
          })}
          error={errors.firstName}
        />

        <TextInput
          id="lastName"
          name="lastName"
          label="Last Name"
          value={state.step1.lastName}
          refFunction={register({
            required: {
              value: true,
              message: 'You need to tell us your family name',
            },
          })}
          error={errors.lastName}
        />

        <ButtonContainer oneButton>
          <Button type="submit">Next</Button>
        </ButtonContainer>
      </form>
    </FormContainer>
  )
}

export default Home
