import React from 'react';
import styles from '../styles/ToggleFormButton.module.css';

const ToggleFormButton = (props) => {
  const setShowFormsHandler = () => {
    props.onToggleForm();
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.toggleBtn}
        id='switch'
        type='checkbox'
        onChange={setShowFormsHandler}
      />
      <label htmlFor='switch'></label>
    </div>
  );
};

export default ToggleFormButton;
