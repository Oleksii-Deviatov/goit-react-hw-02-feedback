import React, { Component } from "react";
import styles from "./styles.module.css";

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

  render() {
    const { good, bad, neutral } = this.state;

    return (
      <div className={styles.FeedbackCounter}>
        <h2 className={styles.FeedbackCounterTitle}>Please leave Feedback</h2>
        <div className={styles.btns}>
          <button className={styles.btn}>Good</button>
          <button className={styles.btn}>Neutral</button>
          <button className={styles.btn}>Bad</button>
        </div>
        <h3 className={styles.StatTitle}>Statistics</h3>
        <div className={styles.statWrapper}>
          <p className={styles.stat}>
            Good: <span className={styles.statValue}>{good}</span>
          </p>
          <p className={styles.stat}>
            Neutral: <span className={styles.statValue}>{neutral}</span>
          </p>
          <p className={styles.stat}>
            Bad: <span className={styles.statValue}>{bad}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default FeedbackCounter;
