import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEdit, FaTrash } from 'react-icons/fa';

const QuizCreationPage = () => {
  const navigate = useNavigate();
  const [quizName, setQuizName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({ question: '', options: ['', '', '', ''], correctAnswer: '', points: 5 });
  const [editingIndex, setEditingIndex] = useState(null);
  const [totalPoints, setTotalPoints] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');


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
      setErrorMessage(''); // Clear error message if no error
    } else {
      setErrorMessage('Please fill in all fields for the question.');
    }
  };

  const editQuestion = (index) => {
    setNewQuestion(questions[index]);
    setEditingIndex(index);
    window.scrollTo(0, 0);
  };

  const removeQuestion = (index) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      const updatedQuestions = [...questions];
      updatedQuestions.splice(index, 1);
      setQuestions(updatedQuestions);
      calculateTotalPoints();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to save the quiz data
    console.log({ quizName, questions });
  };

  // Function to calculate the total points
  const calculateTotalPoints = () => {
    let total = 0;
    questions.forEach(question => {
      total += parseInt(question.points);
    });
    setTotalPoints(total);
  };

  useEffect(() => {
    calculateTotalPoints();
  }, [questions]); // Call calculateTotalPoints whenever questions change


  const handleDeleteQuiz = (index) => {
    if (window.confirm("Are you sure you want to delete this quiz?")) {
      const updatedQuizzes = [...quizzes];
      updatedQuizzes.splice(index, 1);
      setQuizzes(updatedQuizzes);
    }
  };

  const handleSaveQuiz = () => {
    const quizData = { quizName, questions }; // Quiz data from the state
    const fileName = 'quiz_data.json'; // Default file name
    const defaultQuizData = { quizName: 'My Quiz', questions: [{ question: 'Question 1', answer: 'Answer 1' }] }; // Default quiz data

    const jsonData = JSON.stringify(quizData || defaultQuizData, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;

    // Trigger a click event to initiate the download
    a.click();

    // Clean up
    URL.revokeObjectURL(url);
  };

  const handleLoadQuiz = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = JSON.parse(event.target.result);
      setQuizName(data.quizName);
      setQuestions(data.questions);
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <header>
        <h1>Create Quiz</h1>
      </header>

      <form className="form" onSubmit={handleSubmit}>
        <label className='label'>
          Quiz Name:
          <input className='input' type="text" value={quizName} onChange={(e) => setQuizName(e.target.value)} required />
        </label>
        <h3>{editingIndex !== null ? 'Edit Question' : 'Add New Question'}</h3>
        <label className='label'>
          Question:
          <input className='input' type="text" name="question" value={newQuestion.question} onChange={handleInputChange} required />
        </label>
        <br />
        {newQuestion.options.map((option, index) => (
          <div key={index}>
            <label className='label'>
              Option {index + 1}:
              <input
                className='input'
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                required
              />
            </label>
          </div>
        ))}
        <label className='label'>
          Correct Answer:
          <select className='input' name="correctAnswer" value={newQuestion.correctAnswer} onChange={handleInputChange} required>
            <option value="">Select Correct Answer</option>
            {newQuestion.options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <br />
        <label className='label'>
          Points:
          <input className='input' type="number" name="points" value={newQuestion.points} onChange={handleInputChange} min="1" required />
        </label>
        <br />
        <button className='quiz-form-button' type="button" onClick={addQuestion}>{editingIndex !== null ? 'Save Changes' : 'Add Question'}</button>
        <br />
        <p className="error">{errorMessage}</p>
      </form>

      {/* List of questions */}
      <form className="form">
        <h3>Quiz: {quizName}</h3>
        <h3>Questions</h3>
        <ul className="question-list">
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
              <button type="button" onClick={() => editQuestion(index)}>Edit <FaEdit /></button>
              <button type="button" onClick={() => removeQuestion(index)}>Remove <FaTrash /></button>
            </li>
          ))}
        </ul>

        {/* Display total points */}
        <p className="total-points">Total Points: {totalPoints}</p>

        {/* Buttons for deleting and saving the quiz */}
        <div className="quiz-buttons">
          <button onClick={handleDeleteQuiz}>Delete Quiz</button>
          <button onClick={handleSaveQuiz}>Save Quiz</button>
        </div>

        {/* Button to load quiz from file */}
        <label htmlFor="file-input" className="load-quiz-button">Load Quiz</label>
        <input
          id="file-input"
          type="file"
          accept=".json"
          onChange={handleLoadQuiz}
          style={{ display: 'none' }}
        />
      </form >

      {/* Button to navigate back */}
      < button className='back-arrow' onClick={() => navigate('/')}> <FaArrowLeft /> Home Page </button >
    </div >
  );
};

export default QuizCreationPage;
