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

function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
