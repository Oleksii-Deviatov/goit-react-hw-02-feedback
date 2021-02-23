import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Container = ({ title, children }) => (
  <div className={styles.section}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <div className={styles.container}>{children}</div>
  </div>
);

Container.propTypes = {
  title: PropTypes.string,
};

export default Container;
