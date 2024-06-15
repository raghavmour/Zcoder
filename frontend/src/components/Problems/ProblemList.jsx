import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Problems.css';
import HomeButton from '../Home/HomeButton';
const ProblemList = () => {
  const [problems, setProblems] = useState([]);

  const fetchProblems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/problems', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setProblems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProblems();
  }, []);

  return (
    <div className="problem-list">
      <HomeButton />
      <h2>Your Problems</h2>
      {problems.map((problem) => (
        <div key={problem._id} className="problem-item">
          <p><strong>Question:</strong> {problem.question}</p>
          <p><strong>Answer:</strong> {problem.answer}</p>
          <p><strong>Privacy:</strong> {problem.isPublic ? 'Public' : 'Private'}</p>
        </div>
      ))}
    </div>
  );
};

export default ProblemList;
