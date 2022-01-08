import React, { Component } from 'react';
import CurriculumOutput from './output/CurriculumOutput';
import EducationalExperience from './components/EducationalExperience';
import GeneralInformation from './components/GeneralInformation';
import PracticalExperience from './components/PracticalExperience';
import './styles/Body.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      generalInfo: {
        name: '',
        city: '',
        phone: '',
        mail: '',
      },
      experience: [],
      educationalInfo: [],
    };
  }

  cvInfoHandler = (info) => {
    if ('name' in info) {
      this.setState({
        generalInfo: {
          ...info,
        },
      });
    } else if ('shool' in info) {
      this.setState({
        educationalInfo: this.state.educationalInfo.concat(info),
      });
    } else if ('company' in info) {
      this.setState({
        experience: this.state.experience.concat(info),
      });
    }
  };

  removeEducationHandler = () => {
    this.setState({
      educationalInfo: this.state.educationalInfo.slice(
        0,
        this.state.educationalInfo.length - 1
      ),
    });
  };

  removeExperienceHandler = () => {
    this.setState({
      experience: this.state.experience.slice(
        0,
        this.state.experience.length - 1
      ),
    });
  };

  render() {
    const { generalInfo, educationalInfo, experience } = this.state;
    return (
      <div>
        <h1>CV Creator</h1>
        <div className='form-container'>
          <div className='form-div'>
            <h2>General Information</h2>
            <GeneralInformation onFormSubmit={this.cvInfoHandler} />
          </div>
          <div className='form-div'>
            <h2>Educational Experience</h2>
            <EducationalExperience
              onFormSubmit={this.cvInfoHandler}
              onDeleteSubmit={this.removeEducationHandler}
            />
          </div>
          <div className='form-div'>
            <h2>Practical Experience</h2>
            <PracticalExperience
              onFormSubmit={this.cvInfoHandler}
              onDeleteSubmit={this.removeExperienceHandler}
            />
          </div>
        </div>
        <CurriculumOutput
          info={generalInfo}
          education={educationalInfo}
          experience={experience}
        />
      </div>
    );
  }
}

export default App;
