import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

const QuizPage = ({ quizzes }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const parsedId = id;
    const quiz = quizzes.find((quiz) => quiz.name === parsedId);


    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userResponses, setUserResponses] = useState({});
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);


    useEffect(() => {
        if (!quiz) return; // Ensure quiz is defined before accessing its properties
        // Load score from local storage for this quiz
        const storedScore = localStorage.getItem(`quiz-${parsedId}-score`);
        if (storedScore) {
            setScore(parseInt(storedScore));
        }
    }, [parsedId, quiz]);


    const handleAnswerSelect = (selectedOption) => {
        setUserResponses((prevResponses) => ({
            ...prevResponses,
            [currentQuestionIndex]: selectedOption,
        }));
    };


    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, (quiz && quiz.questions.length) ? quiz.questions.length - 1 : 0));
    };


    const handlePreviousQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };


    const handleQuizSubmit = () => {
        if (!quiz) return; // Ensure quiz is defined before accessing its properties
        // Calculate score based on user responses
        let newScore = 0;
        quiz.questions.forEach((question, index) => {
            if (question.correct_answer === userResponses[index]) { // Ensure correct_answer is used instead of correctAnswer
                newScore += question.points;
            }
        });

        // Update user's score for each quiz
        setScore(newScore);
        localStorage.setItem(`quiz-${parsedId}-score`, newScore.toString()); // Save new score to local storage


        // Reset user responses and current question index
        setUserResponses({});
        setCurrentQuestionIndex(0);
        // Set quiz as submitted
        setSubmitted(true);
    };

    const currentQuestion = quiz.questions[currentQuestionIndex];


    return (
        <div className='quiz-container'>
            {quiz ? (
                <div>
                    <h2 className='quiz-title'>{quiz.name}</h2>
                    <div className='question-container'>
                        <p>(5 points for each question )</p>
                        {currentQuestion && (
                            <div>
                                <h3 className='question'>{currentQuestion.question}</h3>
                                <ul className='options-list'>
                                    {currentQuestion.options.map((option, index) => (
                                        <li className='option-item' key={index}>
                                            <label className='option-label'>
                                                <input
                                                    type="radio"
                                                    name={`question-${currentQuestionIndex}`}
                                                    value={option}
                                                    checked={userResponses[currentQuestionIndex] === option}
                                                    onChange={() => handleAnswerSelect(option)}
                                                />
                                                {option}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <div className='submit-button'>
                            <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
                            <GrLinkPrevious /> Previous
                            </button>
                            <button onClick={handleNextQuestion} disabled={currentQuestionIndex === quiz.questions.length - 1}>
                                Next <GrLinkNext />
                            </button>
                            {currentQuestionIndex === quiz.questions.length - 1 && (
                                <button className='Submit-Quiz' onClick={handleQuizSubmit}>Submit Quiz</button>
                            )}
                        </div>
                        {submitted && (
                            <div>
                                <h3 className='score'>Score: {score}/{quiz.highest_score}</h3>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <p>Quiz not found.</p>
            )}

            <button className='back-arrow' onClick={() => navigate('/QuizGame')}> <FaArrowLeft /> Quiz Game Page </button>
        </div>
    );
};

export default QuizPage;
