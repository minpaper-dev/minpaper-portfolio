import React from 'react'
import { styled } from 'styled-components'
import Profile from '../components/Profile'
import Career from '../components/Career'

const MainPage = () => {
  return (
    <Container>
      <Profile />
      <Divider />
      <Career />
    </Container>
  )
}

const Container = styled.div`
  /* width: 600px; */
  margin: 5rem auto;
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
`

export default MainPage
