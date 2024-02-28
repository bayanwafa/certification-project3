import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const QuizCreationPage = () => {
  const navigate = useNavigate();
  const [quizName, setQuizName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({ question: '', options: ['', '', '', ''], correctAnswer: '', points: 5 });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewQuestion({ ...newQuestion, [name]: value });
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...newQuestion.options];
    updatedOptions[index] = value;
    setNewQuestion({ ...newQuestion, options: updatedOptions });
  };

  const addQuestion = () => {
    if (newQuestion.question && newQuestion.options.every(option => option !== '') && newQuestion.correctAnswer && newQuestion.points) {
      if (editingIndex !== null) {
        const updatedQuestions = [...questions];
        updatedQuestions[editingIndex] = newQuestion;
        setQuestions(updatedQuestions);
        setEditingIndex(null);
      } else {
        setQuestions([...questions, newQuestion]);
      }
      setNewQuestion({ question: '', options: ['', '', '', ''], correctAnswer: '', points: 5 });
    } else {
      alert('Please fill in all fields for the question.');
    }
  };

  const editQuestion = (index) => {
    setNewQuestion(questions[index]);
    setEditingIndex(index);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to save the quiz data
    console.log({ quizName, questions });
  };


  return (
    <div>
      <header>
        <h1>Create Quiz</h1>
      </header>
      
      <form onSubmit={handleSubmit}>
        <label>
          Quiz Name:
          <input type="text" value={quizName} onChange={(e) => setQuizName(e.target.value)} required />
        </label>
        <br />
        <h3>{editingIndex !== null ? 'Edit Question' : 'Add New Question'}</h3>
        <label>
          Question:
          <input type="text" name="question" value={newQuestion.question} onChange={handleInputChange} required />
        </label>
        <br />
        {newQuestion.options.map((option, index) => (
          <div key={index}>
            <label>
              Option {index + 1}:
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                required
              />
            </label>
          </div>
        ))}
        <label>
          Correct Answer:
          <select name="correctAnswer" value={newQuestion.correctAnswer} onChange={handleInputChange} required>
            <option value="">Select Correct Answer</option>
            {newQuestion.options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Points:
          <input type="number" name="points" value={newQuestion.points} onChange={handleInputChange} min="1" required />
        </label>
        <br />
        <button type="button" onClick={addQuestion}>{editingIndex !== null ? 'Save Changes' : 'Add Question'}</button>
        <br />
        </form>
        
        <form>
        <h3>Quizzes</h3>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              <div>
                <strong>{question.question}</strong> - ({question.points} points)
              </div>
              <ul>
                {question.options.map((option, oIndex) => (
                  <li key={oIndex}>{option}</li>
                ))}
              </ul>
              <button type="button" onClick={() => editQuestion(index)}>Edit</button>
              <button type="button" onClick={() => removeQuestion(index)}>Remove</button>
            </li>
          ))}
        </ul>
        
        <button type="submit">Save Quiz</button>
        </form>

      <button className='back-arrow' onClick={() => navigate('/')}> <FaArrowLeft /> Home Page </button>
    </div>
  );
};

export default QuizCreationPage;
