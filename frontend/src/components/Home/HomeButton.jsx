import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homebutton.css';

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <button className="home-button" onClick={() => navigate('/')}>
      Home
    </button>
  );
};

export default HomeButton;
