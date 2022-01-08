import React from 'react';
import '../styles/ApplicationOutput.css';
import GeneralInfoOutput from './GeneralInfoOutput.js';
import EducationExpOutput from './EducationExpOutput.js';
import PracticalExpOutput from './PracticalExpOutput';

const CurriculumOutput = (props) => {
  const { info, education, experience } = props;
  return (
    <div className='container'>
      <GeneralInfoOutput info={info} />
      <EducationExpOutput education={education} />
      <PracticalExpOutput experience={experience} />
    </div>
  );
};

export default CurriculumOutput;
