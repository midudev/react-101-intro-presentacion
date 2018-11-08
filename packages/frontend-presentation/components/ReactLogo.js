import React from 'react'
import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 20s linear infinite;
`

export const ReactLogo = _ => (
  <Rotate>
    <img src="../assets/react-logo-png.png" width="150" />
  </Rotate>
)
