import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import logo from '../image/quiz.jpg';


const QuizGame = () => {
  const navigate = useNavigate();
  


  return (
    <div>
      <header>
        <img src={logo} alt="Quiz Image" />
        <h1>Quiz Game</h1>
      </header>
      
      <button className='back-arrow' onClick={() => navigate('/')}> <FaArrowLeft /> Home Page</button>
    </div>
  );
};

export default QuizGame;
