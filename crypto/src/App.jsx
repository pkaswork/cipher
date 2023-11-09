import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Exercisepage from './components/Exercisepage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/exercise" element={<Exercisepage />} />
      </Routes>
    </>
  )
}

export default App
