import React from 'react';
import '../styles/ApplicationOutput.css';
import GeneralInfoOutput from './GeneralInfoOutput.js';
import EducationExpOutput from './EducationExpOutput.js';
import PracticalExpOutput from './PracticalExpOutput';

const CVOutput = (props) => {
  return (
    <div className='container'>
      {props.info.length > 0 && <GeneralInfoOutput info={props.info} />}
      {props.education.length > 0 && (
        <EducationExpOutput education={props.education} />
      )}
      {props.experience.length > 0 && (
        <PracticalExpOutput experience={props.experience} />
      )}
    </div>
  );
};

export default CVOutput;
