import React from 'react';
import '../styles/ApplicationOutput.css';

const GeneralInfoOutput = (props) => {
  return (
    <div id='div1'>
      <h2>{props.info.name}</h2>
      <ul className='general-info-wrapper'>
        <li>{props.info.city}</li>
        <li>{props.info.phone}</li>
        <li>{props.info.mail}</li>
      </ul>
    </div>
  );
};

export default GeneralInfoOutput;
