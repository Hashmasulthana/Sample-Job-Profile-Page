import React from 'react';
import './Quiz.css';

const QuizChallenge = () => {
  const challenges = [
    { company: 'Amazon', cashPrize: '2 Lakhs', rounds: 3 },
    { company: 'Google', cashPrize: '3 Lakhs', rounds: 5 },
    { company: 'Microsoft', cashPrize: '1.5 Lakhs', rounds: 4 },
    { company: 'Facebook', cashPrize: '2 Lakhs', rounds: 3 },
    { company: 'Apple', cashPrize: '2.5 Lakhs', rounds: 4 },
    { company: 'Tesla', cashPrize: '3 Lakhs', rounds: 5 },
    { company: 'IBM', cashPrize: '1.8 Lakhs', rounds: 4 },
    { company: 'Netflix', cashPrize: '1.5 Lakhs', rounds: 3 },
    { company: 'Spotify', cashPrize: '2 Lakhs', rounds: 3 }
  ];

  return (
    <div className="quiz-container">
      <h2>Quiz Challenges</h2>
      <div className="quiz-card-container">
        {challenges.map((challenge, index) => (
          <div className="quiz-card" key={index}>
            <h3>{challenge.company}</h3>
            <p>Cash Prize: {challenge.cashPrize}</p>
            <p>Rounds: {challenge.rounds}</p>
            <button className="register-btn">Register</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizChallenge;
