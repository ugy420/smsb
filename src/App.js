// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookGround from './pages/BookGround';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import NotFound from './pages/NotFound';
import GroundList from './components/Groundlist';
import Events from './pages/Events';
import AHome from './pages/AdminHome';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookGround />} />
        <Route path="/ground-list" element={<GroundList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ahome" element={<AHome />} />
      </Routes>
    </Router>
  );
};

export default App;
