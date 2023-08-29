import React from 'react'
import { styled } from 'styled-components'
import Profile from '../components/Profile'
import Career from '../components/Career'
import Project from '../components/Project'

const MainPage = () => {
  return (
    <Container>
      <Profile />
      <Divider />
      <Career />
      <Project />
    </Container>
  )
}

const Container = styled.div`
  /* width: 600px; */
  margin: 5rem auto;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
`

export default MainPage
