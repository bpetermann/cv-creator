import React from 'react';
import '../styles/ApplicationOutput.css';

const GeneralInfoOutput = (props) => {
  return (
    <div id='div1'>
      <h2>{props.info[0].name}</h2>
      <ul className='general-info-wrapper'>
        <li>{props.info[0].city}</li>
        <li>{props.info[0].phone}</li>
        <li>{props.info[0].mail}</li>
      </ul>
    </div>
  );
};

export default GeneralInfoOutput;
