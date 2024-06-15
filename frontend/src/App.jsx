import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import Logout from './components/Auth/Logout';
import AddProblem from './components/Problems/AddProblem';
import ProblemList from './components/Problems/ProblemList';
import Dashboard from './components/Dashboard/Dashboard';
import Contest from './components/ContestCalendar/Contest';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/add-problem" element={<AddProblem />} />
        <Route path="/problem-list" element={<ProblemList />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Contest-Calendar" element={<Contest />} />
      </Routes>
    </Router>
  );
};

export default App;
