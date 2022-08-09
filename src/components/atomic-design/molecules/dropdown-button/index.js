import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DropdownButton = ({ options, inputName, name, label, placeHolder }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="content">
      <label className="input-label" htmlFor={inputName}>
        {label}
      </label>
      <div className="select-input">
        <span className="line"></span>
        <div className="content">
          <label className="select-label" htmlFor={name}>
            {value}
          </label>
          <select className="select" name={name} id={name} value={value} onChange={handleChange}>
            {placeHolder && (
              <option disabled hidden>
                {placeHolder}
              </option>
            )}
            {options.map((option) => (
              <option className="select-option" key={option.key} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

DropdownButton.propTypes = {
  options: PropTypes.array.isRequired,
  inputName: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeHolder: PropTypes.string,
};

DropdownButton.defaultProps = {
  options: [],
  inputName: '',
  name: '',
  value: '',
  label: '',
  placeHolder: '',
};

export default DropdownButton;
