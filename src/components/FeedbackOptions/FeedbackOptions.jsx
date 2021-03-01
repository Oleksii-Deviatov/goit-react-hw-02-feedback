import styles from './styles.module.css';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const Buttons = ({ onLeaveFeedback, options }) => (
  <>
    {options.map(key => (
      <button
        key={shortid()}
        className={styles.btn}
        name={key}
        onClick={onLeaveFeedback}
      >
        {key}
      </button>
    ))}
  </>
);

Buttons.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Buttons;
