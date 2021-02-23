import styles from './styles.module.css';

const Buttons = ({ onLeaveFeedback }) => (
  <div className={styles.btns}>
    <button className={styles.btn} name="good" onClick={onLeaveFeedback}>
      Good
    </button>
    <button className={styles.btn} name="neutral" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button className={styles.btn} name="bad" onClick={onLeaveFeedback}>
      Bad
    </button>
  </div>
);

export default Buttons;
