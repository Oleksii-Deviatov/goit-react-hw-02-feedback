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
    setState(prevState => {
      return {
        ...prevState,
        [name]: prevState[name] + 1,
      };
    });
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

// class FeedbackCounter extends Component {
//   static defaultProps = {
//     initialGood: 0,
//     initialNeutral: 0,
//     initialBad: 0,
//   };

//   static propTypes = {
//     initialGood: PropTypes.number,
//     initialNeutral: PropTypes.number,
//     initialBad: PropTypes.number,
//   };

//   state = {
//     good: this.props.initialGood,
//     neutral: this.props.initialNeutral,
//     bad: this.props.initialBad,
//   };

//   handleIncrement = ({ target: { name } }) => {
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return total ? Math.round((good / total) * 100) : 0;
//   };

//   render() {
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//     const onLeaveFeedback = this.handleIncrement;
//     const { good, bad, neutral } = this.state;

//     const keysForBtns = Object.keys(this.state);

//     return (
// <div className={styles.FeedbackCounter}>
//   <Section title={'Please leave Feedback'}>
//     <FeedbackOptions
//       onLeaveFeedback={onLeaveFeedback}
//       options={keysForBtns}
//     />
//   </Section>

//   {total ? (
//     <Section title={'Statistics'}>
//       <Statistics
//         good={good}
//         neutral={neutral}
//         bad={bad}
//         total={total}
//         positivePercentage={positivePercentage}
//       />
//     </Section>
//   ) : (
//     <Section>
//       <Notification message="No feedback given"></Notification>
//     </Section>
//   )}
// </div>
//     );
//   }
// }

export default FeedbackCounter;
