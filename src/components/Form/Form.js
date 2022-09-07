import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { divStyle } from '../style';
import Input from '../Input/Input';
import { nameTitle, numberTitle } from '../static/titles';
import { contactNameRegex, contactNumberRegex } from '../static/regex';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitData(this.state)
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={divStyle}>
        <label style={{ fontSize: 25, marginRight: 14 }}>Name:</label>
        <Input name={'name'}
               type={'text'}
               title={nameTitle}
               pattern={contactNameRegex}
               isRequired={true}
               onChange={this.handleChange} />
        <label style={{ fontSize: 25, marginRight: 14 }}>Number:</label>
        <Input name={'number'}
               type={'tel'}
               title={numberTitle}
               pattern={contactNumberRegex}
               onChange={this.handleChange}
               isRequired={true} />
        <button >Add contact</button>
      </form>
    );
  }
}

Form.propTypes = {
  submitData: PropTypes.func
};

export default Form;
