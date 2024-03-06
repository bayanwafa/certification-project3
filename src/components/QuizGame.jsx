import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { fetchQuizzes } from '../reducers/actions';
import logo from '../image/quiz.jpg';
import quizzes from '../data/quiz.json';
import { IoAdd } from "react-icons/io5";

const QuizGame = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuizzes());
  }, [dispatch]);

  return (
    <div>
      <header>
        <img src={logo} alt="Quiz Image" />
        <h1>Quiz Game App</h1>
      </header>

      <h2>Select a Quiz</h2>
      <ul className='quiz-list'>
        {quizzes.map((quiz, index) => (
          <li className='quiz-item' key={index}>
            <Link className='quiz-link' to={`/quiz/${quiz.name}`}>{quiz.name}</Link>
          </li>
        ))}
      </ul>

      {/* Button to navigate to quiz creation page */}
      <IoAdd className='create-quiz-game' onClick={() => navigate('/create-quiz')} />

      {/* Button to navigate back */}
      <button className='back-arrow' onClick={() => navigate('/')}> <FaArrowLeft /> Home Page</button>
    </div>
  );
};

export default QuizGame;
