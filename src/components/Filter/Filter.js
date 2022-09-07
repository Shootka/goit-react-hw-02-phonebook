import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';

class Filter extends Component {
  render() {
    const { onChange} = this.props
    return (
      <div>
        <span style={{fontSize: 20}}>Find contact by name </span>
        <Input onChange={onChange}/>
      </div>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func
};

export default Filter;
