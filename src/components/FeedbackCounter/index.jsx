import React, { Component } from 'react';
import styles from './styles.module.css';
import Buttons from './Buttons';
import Values from './Values';

class FeedbackCounter extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  static propTypes = {
    //
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  handleIncrement = ({ target: { name } }) => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, bad, neutral } = this.state;

    return (
      <div className={styles.FeedbackCounter}>
        <h2 className={styles.FeedbackCounterTitle}>Please leave Feedback</h2>
        <Buttons increment={this.handleIncrement} />
        <h3 className={styles.StatTitle}>Statistics</h3>
        <Values good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }
}

export default FeedbackCounter;
