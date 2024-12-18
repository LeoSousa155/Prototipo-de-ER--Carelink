import React from 'react';
import styles from '../../styles/InputField.module.css';

export const InputFieldDr = ({ label, type = "text", id, placeholder }) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input
        type={type}
        id={id}
        className={styles.input}
        name={id}
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
};