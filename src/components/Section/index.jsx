import React from 'react';
import styles from './styles.module.css';

const Container = ({ title, children }) => (
  <div className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.container}>{children}</div>
  </div>
);

export default Container;
