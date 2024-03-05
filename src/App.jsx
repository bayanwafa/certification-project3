import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setQuizzes } from './reducers/quizReducer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Home from './components/Home';
import QuizGame from './components/QuizGame';
import QuizPage from './components/QuizPage';
import QuizCreationPage from './components/QuizCreationPage';
import Contact from './components/Contact';
import quizzes from './data/quiz.json';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setQuizzes(quizzes));
  }, [dispatch]);


  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/QuizGame">App</Link>
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
            <Route path="/create-quiz" element={<QuizCreationPage />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </Provider >
  );
}

export default App;
