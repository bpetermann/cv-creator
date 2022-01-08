import React, { Component } from 'react';
import '../styles/Forms.css';

class GeneralInformation extends Component {
  constructor() {
    super();

    this.state = {
      cv: {
        name: '',
        city: '',
        phone: '',
        mail: '',
      },
    };
  }

  handleName = (e) => {
    this.setState({
      cv: {
        ...this.state.cv,
        name: e.target.value,
      },
    });
  };

  handleCity = (e) => {
    this.setState({
      cv: {
        ...this.state.cv,
        city: e.target.value,
      },
    });
  };
  handlePhone = (e) => {
    this.setState({
      cv: {
        ...this.state.cv,
        phone: e.target.value,
      },
    });
  };
  handleMail = (e) => {
    this.setState({
      cv: {
        ...this.state.cv,
        mail: e.target.value,
      },
    });
  };

  onSubmitCV = (e) => {
    e.preventDefault();
    this.setState({
      cv: {
        name: '',
        birth: '',
        city: '',
        phone: '',
        mail: '',
      },
    });
    this.props.onFormSubmit(this.state.cv);
  };

  onResetHandler = (e) => {
    e.preventDefault();
    this.setState({
      cv: {
        name: '',
        birth: '',
        city: '',
        phone: '',
        mail: '',
      },
    });
  };

  render() {
    const { cv } = this.state;

    return (
      <div>
        <form
          onSubmit={this.onSubmitCV}
          onReset={this.onResetHandler}
          className='form'
        >
          <input
            onChange={this.handleName}
            value={cv.name}
            type='text'
            placeholder='First Name/Last Name'
            required
          />
          <input
            onChange={this.handleCity}
            value={cv.city}
            placeholder='Your Location'
            type='text'
            required
          />
          <input
            onChange={this.handlePhone}
            value={cv.phone}
            placeholder='Your Phone'
            type='number'
            required
          />
          <input
            onChange={this.handleMail}
            value={cv.mail}
            placeholder='Your Email'
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

export default GeneralInformation;
