import React, { useState } from 'react';
import '../styles/Forms.css';

const GeneralInformation = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredCity, setEnteredCity] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredMail, setEnteredMail] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const cityChangeHandler = (event) => {
    setEnteredCity(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const mailChangeHandler = (event) => {
    setEnteredMail(event.target.value);
  };

  const onSubmitGeneralInfo = (event) => {
    event.preventDefault();

    const generalInfo = {
      name: enteredName,
      city: enteredCity,
      phone: enteredPhone,
      mail: enteredMail,
    };

    props.onFormSubmit(generalInfo, 'generalInfo');
    setEnteredName('');
    setEnteredCity('');
    setEnteredPhone('');
    setEnteredMail('');
  };

  const onResetHandler = (event) => {
    event.preventDefault();
    props.onDeleteSubmit();
  };

  return (
    <div>
      <form
        onSubmit={onSubmitGeneralInfo}
        onReset={onResetHandler}
        className='form'
      >
        <input
          onChange={nameChangeHandler}
          value={enteredName}
          type='text'
          placeholder='First Name/Last Name'
          required
        />
        <input
          onChange={cityChangeHandler}
          value={enteredCity}
          placeholder='Your Location'
          type='text'
          required
        />
        <input
          onChange={phoneChangeHandler}
          value={enteredPhone}
          placeholder='Your Phone'
          type='number'
          required
        />
        <input
          onChange={mailChangeHandler}
          value={enteredMail}
          placeholder='Your Email'
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

export default GeneralInformation;
