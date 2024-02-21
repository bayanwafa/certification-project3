const quizzes = [
    {
      id: 1,
      name: 'Math Quiz',
      questions: [
        {
          id: 1,
          text: 'What is 2 + 2?',
          options: ['3', '4', '5', '6'],
          correctAnswer: '4'
        },
        {
          id: 2,
          text: 'What is 3 * 5?',
          options: ['10', '15', '20', '25'],
          correctAnswer: '15'
        }
      ]
    },
    {
      id: 2,
      name: 'Science Quiz',
      questions: [
        {
          id: 1,
          text: 'What is the chemical symbol for water?',
          options: ['H2O', 'CO2', 'NaCl', 'O2'],
          correctAnswer: 'H2O'
        },
        {
          id: 2,
          text: 'What is the boiling point of water?',
          options: ['100°C', '50°C', '0°C', '200°C'],
          correctAnswer: '100°C'
        },
        {
          id: 3,
          text: 'Which planet is known as the Red Planet?',
          options: ['Venus', 'Jupiter', 'Mars', 'Saturn'],
          correctAnswer: 'Mars'
        }
      ]
    }
    // Add more quizzes here
  ];
  
  export default quizzes;
  