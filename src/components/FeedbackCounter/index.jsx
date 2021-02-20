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

  handleIncrementGood = e => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleIncrementNeutral = e => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleIncrementBad = e => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const { good, bad, neutral } = this.state;

    return (
      <div className={styles.FeedbackCounter}>
        <h2 className={styles.FeedbackCounterTitle}>Please leave Feedback</h2>
        <Buttons
          onGood={this.handleIncrementGood}
          onNeutral={this.handleIncrementNeutral}
          onBad={this.handleIncrementBad}
        />
        <h3 className={styles.StatTitle}>Statistics</h3>
        <Values good={good123} neutral={neutral} bad={bad} />
      </div>
    );
  }
}

export default FeedbackCounter;
