import styles from "./styles.module.css";

const Buttons = ({ onGood, onNeutral, onBad }) => (
  <div className={styles.btns}>
    <button className={styles.btn} onClick={onGood}>
      Good
    </button>
    <button className={styles.btn} onClick={onNeutral}>
      Neutral
    </button>
    <button className={styles.btn} onClick={onBad}>
      Bad
    </button>
  </div>
);

export default Buttons;
