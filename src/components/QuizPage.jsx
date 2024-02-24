import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const QuizPage = ({ quizzes }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const parsedId = id;
    const quiz = quizzes.find((quiz) => quiz.name === parsedId);
    

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userResponses, setUserResponses] = useState({});
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (!quiz) return; // Ensure quiz is defined before accessing its properties
        // Load highest score from local storage for this quiz
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

        // Update highest score if the new score is higher
        if (newScore > score) {
            setScore(newScore);
            localStorage.setItem(`quiz-${parsedId}-score`, newScore.toString()); // Save new score to local storage
        }

        // Reset user responses and current question index
        setUserResponses({});
        setCurrentQuestionIndex(0);
    };

    const currentQuestion = (quiz && quiz.questions) ? quiz.questions[currentQuestionIndex] : null; 

    return (
        <div>
            {quiz ? (
                <div>
                    <h2>{quiz.name}</h2>
                    <p>(5 points for each question )</p>
                    <div>
                        {currentQuestion && (
                            <div>
                                <h3>{currentQuestion.question}</h3> 
                                <ul>
                                    {currentQuestion.options.map((option, index) => (
                                        <li key={index}>
                                            <label>
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
                        <h3>Highest Score: {score}/{(quiz && quiz.highest_score) ? quiz.highest_score : 0}</h3>
                        <div>
                            <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
                                Previous
                            </button>
                            <button onClick={handleNextQuestion} disabled={currentQuestionIndex === ((quiz && quiz.questions) ? quiz.questions.length - 1 : 0)}>
                                Next
                            </button>
                            {currentQuestionIndex === ((quiz && quiz.questions) ? quiz.questions.length - 1 : 0) && (
                                <button onClick={handleQuizSubmit}>Submit Quiz</button>
                            )}
                        </div>
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
