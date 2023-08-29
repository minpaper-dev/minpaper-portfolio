import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import { styled } from 'styled-components'
import ReviewPage from './pages/ReviewPage'
import Saladpet from './pages/Saladpet'
import EveryCharge from './pages/EveryCharge'
import ScentSation from './pages/ScentSation'

function App() {
  return (
    <Container className="App">
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/saladpet" element={<Saladpet />} />
          <Route path="/everycharge" element={<EveryCharge />} />
          <Route path="/scentsation" element={<ScentSation />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  max-width: 60rem;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export default App
