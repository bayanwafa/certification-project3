import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import QuizGame from './components/QuizGame';
import QuizPage from './components/QuizPage';
import Contact from './components/Contact';
import quizzes from './data/quizData';


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/QuizGame">Quiz Game</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/QuizGame" element={<QuizGame />} />
          <Route path="/quiz/:id" element={<QuizPage quizzes={quizzes} />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
