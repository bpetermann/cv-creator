import React, { useState } from 'react';
import uniqid from 'uniqid';
import '../styles/Forms.css';

const PracticalExperience = (props) => {
  const [enteredFromDate, setEnteredFromDate] = useState('');
  const [enteredToDate, setEnteredToDate] = useState('');
  const [enteredCompany, setEnteredCompany] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');

  const fromDateChangeHandler = (event) => {
    setEnteredFromDate(event.target.value);
  };

  const toDateChangeHandler = (event) => {
    setEnteredToDate(event.target.value);
  };

  const companyChangeHandler = (event) => {
    setEnteredCompany(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const onSubmitExperienceHandler = (event) => {
    event.preventDefault();

    const experience = {
      from: enteredFromDate,
      to: enteredToDate,
      company: enteredCompany,
      description: enteredDescription,
      id: uniqid(),
    };

    props.onFormSubmit(experience, 'experience');
    setEnteredFromDate('');
    setEnteredToDate('');
    setEnteredCompany('');
    setEnteredDescription('');
  };

  const onResetHandler = (event) => {
    event.preventDefault();
    props.onDeleteSubmit();
  };

  return (
    <div>
      <form
        onSubmit={onSubmitExperienceHandler}
        onReset={onResetHandler}
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
          onChange={companyChangeHandler}
          value={enteredCompany}
          placeholder='Company'
          type='text'
          required
        />
        <input
          onChange={descriptionChangeHandler}
          value={enteredDescription}
          placeholder='Description'
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

export default PracticalExperience;
