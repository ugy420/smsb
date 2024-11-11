import React, { useState } from 'react';
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
import SportsClub from './pages/sportsview';
import Members from './pages/members';
import Grounds from './pages/grounds';
import About from './components/About';
import { UserProvider } from './components/userprovider';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserProvider>
    <Router>
      {isLoggedIn && <Navbar />}

      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/book" element={isLoggedIn ? <BookGround /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/ground-list" element={isLoggedIn ? <GroundList /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/events" element={isLoggedIn ? <Events /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/sportsclub" element={isLoggedIn ? <SportsClub /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/sportsclub/:id" element={isLoggedIn ? <SportsClub /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/ahome" element={isLoggedIn ? <AHome /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/members" element={isLoggedIn ? <Members /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/grounds" element={isLoggedIn ? <Grounds /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </Router>
    </UserProvider>
  );
};

export default App;
