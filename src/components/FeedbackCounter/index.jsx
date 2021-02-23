import React, { useState } from 'react';
import styles from './styles.module.css';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Section from '../Section';
import Notification from '../Notification';

function FeedbackCounter() {
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
    <div className={styles.FeedbackCounter}>
      <Section title={'Please leave Feedback'}>
        <FeedbackOptions
          onLeaveFeedback={handleIncrement}
          options={keysForBtns}
        />
      </Section>
      {countTotalFeedback() ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Section>
          <Notification message="No feedback given"></Notification>
        </Section>
      )}
    </div>
  );
}

export default FeedbackCounter;
