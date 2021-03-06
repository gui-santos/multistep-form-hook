import React from 'react'
import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${({ oneButton }) =>
    oneButton ? 'flex-end' : 'space-between'};
  margin-top: 2rem;
`

const ButtonStyles = styled.button`
  background-color: #9100ff;
  transition: background-color 250ms ease-in-out;
  :hover {
    background-color: #aa3dfc;
  }
`

function Button({ children, type }) {
  return <ButtonStyles type={type}>{children}</ButtonStyles>
}

export default Button
