import { Routes, Route, Link } from 'react-router-dom'
import Loginpage from './components/Loginpage'
import Exercisespage from './components/Exercisespage'
import Exercisepage from './components/Exercisepage'
import Notfoundpage from './components/Notfoundpage'

function App() {
  return (
    <>
      <header>
        <Link to="/">Login</Link>
        <Link to="/exercises">Exercises</Link>
        <Link to="/exercise">Exercise</Link>
      </header>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/exercises" element={<Exercisespage />} />
        <Route path="/exercise" element={<Exercisepage />} />
        <Route path="/*" element={<Notfoundpage />} />
      </Routes>
    </>
  )
}

export default App
