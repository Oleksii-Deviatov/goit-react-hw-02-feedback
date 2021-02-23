import styles from './styles.module.css';

const Values = ({ good, neutral, bad, total, positivePercentage }) => (
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
    <p className={styles.stat}>
      total:
      <span className={styles.statValue}>{total}</span>
    </p>
    <p className={styles.stat}>
      Positive Feedback:
      <span className={styles.statValue}>{positivePercentage}</span>%
    </p>
  </div>
);

export default Values;
