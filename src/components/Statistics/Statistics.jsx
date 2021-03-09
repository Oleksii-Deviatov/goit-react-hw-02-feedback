import Notification from '../Notification';
import Section from '../Section';
import styles from './styles.module.css';

function Values({ good, neutral, bad, positivePercentage, total }) {
  return (
    <>
      {total ? (
        <Section title={'Statistics'}>
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
              Total:
              <span className={styles.statValue}>{total}</span>
            </p>
            <p className={styles.stat}>
              Positive Feedback:
              <span className={styles.statValue}>{positivePercentage}</span>%
            </p>
          </div>
        </Section>
      ) : (
        <Section>
          <Notification message="No feedback given"></Notification>
        </Section>
      )}
    </>
  );
}

export default Values;
