import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

  render() {
    const { type, name, pattern, title, isRequired, onChange } = this.props;
    return (
        <input
          onChange={onChange}
          style={{width: 250, height: 20}}
          type={type}
          name={name}
          pattern={pattern}
          title={title}
          required={isRequired}
        />
    );
  }
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  pattern: PropTypes.string,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func
};

export default Input;
