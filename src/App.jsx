import React, { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const keysForBtns = Object.keys(state);
  const { good, neutral, bad } = state;

  const handleIncrement = ({ target: { name } }) => {
    setState(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    let count = 0;
    for (let value of Object.values(state)) {
      count += value;
    }
    return count;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  return (
    <>
      <Section title={'Please leave Feedback'}>
        <FeedbackOptions
          onLeaveFeedback={handleIncrement}
          options={keysForBtns}
        />
      </Section>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </>
  );
}

export default App;
