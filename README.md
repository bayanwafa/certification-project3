# certification-project3

# Quiz Application

Welcome to the Quiz Application! This project is a web application that allows users to play, create, and manage quizzes. It provides a user-friendly interface for interacting with quizzes and offers features for both players and quiz creators.

## Features

- **Play Quizzes**: Users can choose from a list of available quizzes and play them. The application tracks the user's progress and displays their score at the end of the quiz.

- **Create Quizzes**: Quiz creators can easily create new quizzes by adding questions, options, and specifying the correct answers and points for each question.

- **Manage Quizzes**: Users can manage their quizzes by editing existing quizzes, deleting unwanted quizzes, or creating new ones.

## Technologies Used

- **Frontend**: 
The frontend of the application is built using React.js, a popular JavaScript library for building user interfaces. 
React Router is used for client-side routing to navigate between different pages. 
Redux is also utilized for state management, allowing for a more organized and centralized approach to managing application state across components.

- **Backend**: The backend is implemented using Node.js and Express.js, providing RESTful APIs for handling quiz data storage, retrieval, and management. Data is stored in JSON format on the server. It provides a robust set of features for handling HTTP requests, routing, middleware, and more.

- **Data Persistence**: The application now uses localStorage for data persistence instead of asynchronous file operations. This allows the application to save and load quiz data directly from the user's browser storage. As a result, quiz information is stored locally and remains accessible even if the server is restarted or the application is reloaded. By utilizing localStorage, users can seamlessly create, edit, and save quizzes without relying on server-side file operations, enhancing the overall user experience.


## Getting Started

To get started with the Quiz Application, click the link:
