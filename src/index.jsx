import React from 'react';
import ReactDOM from 'react-dom';
import Select from './components/select/select';
import './style.scss';

ReactDOM.render(
  (
    <Select
      value="start value"
      options={['options 1', 'options 2', 'options 3', 'optionsssssssssssssssssssssss 4', 'options 5', 'options 6']}
    />
  ),
  document.getElementById('root'),
);
