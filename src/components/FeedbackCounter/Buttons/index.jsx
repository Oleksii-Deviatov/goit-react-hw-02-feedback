import styles from './styles.module.css';

const Buttons = ({ increment }) => (
  <div className={styles.btns}>
    <button className={styles.btn} name="good" onClick={increment}>
      Good
    </button>
    <button className={styles.btn} name="neutral" onClick={increment}>
      Neutral
    </button>
    <button className={styles.btn} name="bad" onClick={increment}>
      Bad
    </button>
  </div>
);

export default Buttons;
