import styled from 'styled-components'

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto 0;
`

export const ErrorMsg = styled.div`
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: red;
`

export const Label = styled.label`
  display: block;
  margin-top: 1rem;
  font-size: 0.75rem;
  color: #9100ff;
`

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 0.25rem;
`

export const LabelledInput = props => {
  return (
    <Label htmlFor={props.id}>
      {props.label}
      <Input
        id={props.id}
        name={props.name}
        type="text"
        defaultValue={props.defaultValue}
        ref={props.refFunction}
      />
    </Label>
  )
}
