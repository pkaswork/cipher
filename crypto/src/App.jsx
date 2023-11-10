import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Exercisepage from './components/Exercisepage'
import Loginpage from './components/Loginpage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loginpage/>} />
        <Route path="/exercises" element={<Homepage />} />
        <Route path="/exercise" element={<Exercisepage />} />
      </Routes>
    </>
  )
}

export default App
