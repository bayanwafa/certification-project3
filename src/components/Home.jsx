import React from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();


  return (
    <div>
      <header>
        <h1>Home Page</h1>
      </header>
      <h3>This is a Basic Setup for Certification Project III</h3>
      <p>As you can see, we have a basic router setup, with links to separate pages</p>
      <p>As you can see, we can open separate components in these routes </p>
      <p>You will need to incorporate router logically into your project option,
        and how you do it may differ according to which project you use
      </p>
      <button className='start-game' onClick={() => navigate('/QuizGame')}>Start Quiz Game</button>
    </div>
  )
}

export default Home