import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Variantspage from './components/pages/Variantspage/Variantspage';
import Homepage from './components/pages/Homepage/Homepage';
import Theorypage from './components/pages/Theorypage/Theorypage';
import Exercisepage from './components/pages/Exercisepage/Exercisepage';
import Loginpage from './components/pages/Loginpage/Loginpage';

const userData = {
  surname: 'А',
  name: 'А',
  patronymic: 'А',
  variant: '1',
  isLogin: true
};

function App() {
  const [user, setUser] = useState(userData);
  const location = useLocation();
  // const { from } = location.state;
  console.log(location.state);

  return (
    <>
      <Header isLogin={user.isLogin} surname={user.surname} name={user.name} />
      <main className="main">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth" element={<Loginpage />} />
          <Route path="/theory" element={<Theorypage />} />
          <Route path="/exercises" element={<Variantspage surname={user.surname} name={user.name} patronymic={user.patronymic} variant={user.variant} />} />
          <Route path="/exercise" element={<Exercisepage surname={user.surname} name={user.name} patronymic={user.patronymic} variant={user.variant} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
