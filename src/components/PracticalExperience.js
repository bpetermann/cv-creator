import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../styles/Forms.css';

class PracticalExperience extends Component {
  constructor() {
    super();

    this.state = {
      experience: {
        from: '',
        to: '',
        company: '',
        description: '',
        id: uniqid(),
      },
    };
  }

  handleFrom = (e) => {
    this.setState({
      experience: {
        ...this.state.experience,
        from: e.target.value,
      },
    });
  };

  handleTo = (e) => {
    this.setState({
      experience: {
        ...this.state.experience,
        to: e.target.value,
      },
    });
  };

  handleCompany = (e) => {
    this.setState({
      experience: {
        ...this.state.experience,
        company: e.target.value,
      },
    });
  };

  handleDescription = (e) => {
    this.setState({
      experience: {
        ...this.state.experience,
        description: e.target.value,
      },
    });
  };

  onSubmitExperience = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.experience);
    this.setState({
      experience: {
        from: '',
        to: '',
        company: '',
        description: '',
        id: uniqid(),
      },
    });
  };

  onResetHandler = (e) => {
    e.preventDefault();
    this.props.onDeleteSubmit();
  };

  render() {
    const { experience } = this.state;

    return (
      <div>
        <form
          onSubmit={this.onSubmitExperience}
          onReset={this.onResetHandler}
          className='form'
        >
          <input
            onChange={this.handleFrom}
            value={experience.from}
            placeholder='From'
            type='text'
            required
          />
          <input
            onChange={this.handleTo}
            value={experience.to}
            placeholder='To'
            type='text'
            required
          />
          <input
            onChange={this.handleCompany}
            value={experience.company}
            placeholder='Company'
            type='text'
            required
          />
          <input
            onChange={this.handleDescription}
            value={experience.description}
            placeholder='Description'
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

export default PracticalExperience;
