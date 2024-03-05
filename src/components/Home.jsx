import React from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();


  return (
    <div>
      <header>
        <h1>Home Page</h1>
      </header>

      <div className="title">
        <h1>Welcome to the Quiz App</h1>
        <p>This is a quiz application where you can play, create, and manage quizzes.</p>
        <p>Get started by selecting an option from the navigation menu above or click buttons in below.</p>
        <button className='start-game' onClick={() => navigate('/QuizGame')}> Start Quiz Game </button>
        <button className='create-quiz' onClick={() => navigate('/create-quiz')}> Create Quiz Game </button>
      </div>

      <div className="contact-home">
        <p>If you want to contact us, click here</p>
        <button className='contact' onClick={() => navigate('/Contact')}> Contact Us</button>
      </div>
    </div>
  )
}

export default Home;