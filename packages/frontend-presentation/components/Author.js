import React from 'react'
import styled from 'styled-components'
import {AuthorAvatar} from './AuthorAvatar'

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 128px;
`

const Text = styled.p`
  margin: 4px;
  font-size: 24px;
  font-weight: bold;
  text-align: left;
`

export const Author = () => (
  <Wrapper>
    <AuthorAvatar />
    <div>
      <Text>Miguel Ángel Durán</Text>
      <Text>
        <i>Ingeniero Frontend en Schibsted Spain</i>
      </Text>
      <Text>Twitter: @midudev</Text>
    </div>
  </Wrapper>
)
