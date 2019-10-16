import React from 'react'
import useForm from 'react-hook-form'
import Head from 'next/head'
import Router from 'next/router'

import Form from '../components/Form'
import Button, { ButtonContainer } from '../components/Button'

function Home() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
    console.log(data)
    Router.push('/step2')
  }

  return (
    <>
      <Head>
        <title>Step 1</title>
      </Head>

      <h1>Step 1</h1>

      <Form>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input name="example" defaultValue="test" ref={register} />

          {/* include validation with required or other standard HTML validation rules */}
          <input name="exampleRequired" ref={register({ required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <ButtonContainer align="flex-end">
            <Button type="submit">Next</Button>
          </ButtonContainer>
        </form>
      </Form>
    </>
  )
}

export default Home
