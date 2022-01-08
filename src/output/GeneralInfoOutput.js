import React from 'react';
import '../styles/ApplicationOutput.css';

const GeneralInfoOutput = (props) => {
  const { info } = props;
  return (
    <div id='div1'>
      <h2>{info.name}</h2>
      <ul className='general-info-wrapper'>
        <li>{info.city}</li>
        <li>{info.phone}</li>
        <li>{info.mail}</li>
      </ul>
    </div>
  );
};

export default GeneralInfoOutput;
