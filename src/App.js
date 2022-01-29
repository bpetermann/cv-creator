import React, { useState } from 'react';
import CVOutput from './output/CVOutput';
import EducationalExperience from './components/EducationalExperience';
import GeneralInformation from './components/GeneralInformation';
import PracticalExperience from './components/PracticalExperience';
import './styles/Body.css';

const App = () => {
  const [generalInfo, setGeneralInfo] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  const cvInfoHandler = (info, fromForm) => {
    if (fromForm === 'generalInfo') {
      setGeneralInfo([info]);
    } else if (fromForm === 'experience') {
      setExperience((prevExperience) => {
        return [...prevExperience, info];
      });
    } else if (fromForm === 'education') {
      setEducation((prevEducation) => {
        return [...prevEducation, info];
      });
    }
  };

  const removeExperienceHandler = () => {
    setExperience((prevExperience) => {
      return prevExperience.slice(0, prevExperience.length - 1);
    });
  };

  const removeEducationHandler = () => {
    setEducation((prevEducation) => {
      return prevEducation.slice(0, prevEducation.length - 1);
    });
  };

  const removeGeneralInfoHandler = () => {
    setGeneralInfo([]);
  };

  return (
    <div>
      <h1>CV Creator</h1>
      <div className='form-container'>
        <div className='form-div'>
          <h2>General Information</h2>
          <GeneralInformation
            onFormSubmit={cvInfoHandler}
            onDeleteSubmit={removeGeneralInfoHandler}
          />
        </div>
        <div className='form-div'>
          <h2>Educational Experience</h2>
          <EducationalExperience
            onFormSubmit={cvInfoHandler}
            onDeleteSubmit={removeEducationHandler}
          />
        </div>
        <div className='form-div'>
          <h2>Practical Experience</h2>
          <PracticalExperience
            onFormSubmit={cvInfoHandler}
            onDeleteSubmit={removeExperienceHandler}
          />
        </div>
      </div>
      <CVOutput
        info={generalInfo}
        education={education}
        experience={experience}
      />
    </div>
  );
};

export default App;
