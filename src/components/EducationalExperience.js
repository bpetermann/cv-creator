import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../styles/Forms.css';

class EducationalExperience extends Component {
  constructor() {
    super();

    this.state = {
      education: {
        from: '',
        to: '',
        shool: '',
        degree: '',
        id: uniqid(),
      },
    };
  }

  handleFrom = (e) => {
    this.setState({
      education: {
        ...this.state.education,
        from: e.target.value,
      },
    });
  };
  handleTo = (e) => {
    this.setState({
      education: {
        ...this.state.education,
        to: e.target.value,
      },
    });
  };

  handleShool = (e) => {
    this.setState({
      education: {
        ...this.state.education,
        shool: e.target.value,
      },
    });
  };

  handleDegree = (e) => {
    this.setState({
      education: {
        ...this.state.education,
        degree: e.target.value,
      },
    });
  };

  onSubmitEducation = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.education);
    this.setState({
      education: {
        from: '',
        to: '',
        shool: '',
        degree: '',
        id: uniqid(),
      },
    });
  };

  onResetHandler = (e) => {
    e.preventDefault();
    this.props.onDeleteSubmit();
  };

  render() {
    const { education } = this.state;

    return (
      <div>
        <form
          onSubmit={this.onSubmitEducation}
          onReset={this.onResetHandler}
          className='form'
        >
          <input
            onChange={this.handleFrom}
            value={education.from}
            placeholder='From'
            type='text'
            required
          />
          <input
            onChange={this.handleTo}
            value={education.to}
            placeholder='To'
            type='text'
            required
          />
          <input
            onChange={this.handleShool}
            value={education.shool}
            placeholder='University/School Name'
            type='text'
            required
          />
          <input
            onChange={this.handleDegree}
            value={education.degree}
            placeholder='Degree'
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
  }
}

export default EducationalExperience;
