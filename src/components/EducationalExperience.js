import React, { useState } from 'react';
import uniqid from 'uniqid';
import '../styles/Forms.css';

const EducationalExperience = (props) => {
  const [enteredFromDate, setenteredFromDate] = useState('');
  const [enteredToDate, setenteredToDate] = useState('');
  const [enteredShool, setenteredShool] = useState('');
  const [enteredDegree, setenteredDegree] = useState('');

  const fromDateChangeHandler = (event) => {
    setenteredFromDate(event.target.value);
  };

  const toDateChangeHandler = (event) => {
    setenteredToDate(event.target.value);
  };

  const shoolChangeHandler = (event) => {
    setenteredShool(event.target.value);
  };

  const degreeChangeHanlder = (event) => {
    setenteredDegree(event.target.value);
  };

  const submitEducationHandler = (event) => {
    event.preventDefault();

    const education = {
      from: enteredFromDate,
      to: enteredToDate,
      shool: enteredShool,
      degree: enteredDegree,
      id: uniqid(),
    };

    props.onFormSubmit(education, 'education');
    setenteredFromDate('');
    setenteredToDate('');
    setenteredShool('');
    setenteredDegree('');
  };

  const resetHandler = (event) => {
    event.preventDefault();
    props.onDeleteSubmit();
  };

  return (
    <div>
      <form
        onSubmit={submitEducationHandler}
        onReset={resetHandler}
        className='form'
      >
        <input
          onChange={fromDateChangeHandler}
          value={enteredFromDate}
          placeholder='From'
          type='text'
          required
        />
        <input
          onChange={toDateChangeHandler}
          value={enteredToDate}
          placeholder='To'
          type='text'
          required
        />
        <input
          onChange={shoolChangeHandler}
          value={enteredShool}
          placeholder='University/School Name'
          type='text'
          required
        />
        <input
          onChange={degreeChangeHanlder}
          value={enteredDegree}
          placeholder='Degree'
          type='text'
          required
        />
        <button className='delete' type='reset'>
          Delete
        </button>
        <button className='add' type='submit'>
          Add
        </button>
      </form>
    </div>
  );
};

export default EducationalExperience;
