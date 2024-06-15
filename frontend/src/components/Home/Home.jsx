import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1>Welcome to Zcoder</h1>
      <button onClick={() => navigate('/signup')}>Signup</button>
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/profile')}>Profile</button>
      <button onClick={() => navigate('/logout')}>Logout</button>
      <button onClick={() => navigate('/add-problem')}>Add Problem</button>
      <button onClick={() => navigate('/problem-list')}>Problem List</button>
      <button onClick={() => navigate('/Dashboard')}>Dashboard</button>
      <button onClick={() => navigate('/Contest-Calendar')}>Contest-Calendar</button>
    </div>
  );
};

export default Home;
