import styled from 'styled-components'

const ErrorMsg = styled.div`
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: red;
`

const Label = styled.label`
  display: block;
  margin-top: 1rem;
  font-size: 0.75rem;
  color: #9100ff;
`

const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 0.25rem;
`

const TextInput = ({ id, name, label, value, refFunction, error }) => {
  return (
    <>
      <Label htmlFor={id || name}>
        {label}
        <Input
          id={id || name}
          name={name}
          type="text"
          defaultValue={value}
          ref={refFunction}
        />
      </Label>

      {error && <ErrorMsg>{error.message}</ErrorMsg>}
    </>
  )
}

export default TextInput
