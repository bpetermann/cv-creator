import React from 'react';
import '../styles/ApplicationOutput.css';
import GeneralInfoOutput from './GeneralInfoOutput.js';
import EducationExpOutput from './EducationExpOutput.js';
import PracticalExpOutput from './PracticalExpOutput';

const CVOutput = (props) => {
  return (
    <div className='container'>
      <GeneralInfoOutput info={props.info} />
      <EducationExpOutput education={props.education} />
      <PracticalExpOutput experience={props.experience} />
    </div>
  );
};

export default CVOutput;
