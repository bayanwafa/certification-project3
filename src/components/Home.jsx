import React from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();


  return (
    <div>
      <header>
        <h1>Home Page</h1>
      </header> 
      <button className='start-game' onClick={() => navigate('/QuizGame')}> Start Quiz Game </button>
      <button className='create-quiz' onClick={() => navigate('/create-quiz')}> Create Quiz Game </button>
      <p>If you want to contact us</p>
      <button className='contact' onClick={() => navigate('/Contact')}> Contact Us</button>
    </div>
  )
}

export default Home;