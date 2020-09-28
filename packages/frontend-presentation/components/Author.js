import React from 'react'
import styled from 'styled-components'
import {AuthorAvatar} from './AuthorAvatar'

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 128px;
`
const H1 = styled.p`
  margin: 4px;
  font-size: 24px;
  font-weight: bold;
  text-align: left;
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
      <H1>Miguel Ángel Durán</H1>
      <Text>@midudev</Text>
      <Text>
        <i>Arquitecto Frontend en Adevinta Spain</i>
      </Text>
    </div>
  </Wrapper>
)
