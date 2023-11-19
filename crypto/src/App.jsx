import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Variantspage from './components/Variantspage/Variantspage';
import Homepage from './components/Homepage/Homepage';
import Exercisepage from './components/Exercisepage/Exercisepage';
import Loginpage from './components/Loginpage/Loginpage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="/auth" element={<Loginpage />} />
          <Route path="/exercises" element={<Variantspage />} />
          <Route path="/exercise" element={<Exercisepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
