import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Import Screens
import Home from "./views/Home";
import Calculator from "./views/Calculator";
import Login from "./views/Login";
import Register from "./views/Register";
import NotFound from "./views/NotFound";
import NavBar from './components/NavBar';
import LiquidationPage from './views/LiquidationPage';
import Profile from './views/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/liquidationPage" element={<LiquidationPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
