import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Exercisepage from './components/Exercisepage'
import Notfoundpage from './components/Notfoundpage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/exercise" element={<Exercisepage />} />
        <Route path="/*" element={<Notfoundpage />} />
      </Routes>
    </>
  )
}

export default App
