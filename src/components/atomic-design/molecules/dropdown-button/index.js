import React from 'react';
import PropTypes from 'prop-types';

const DropdownButton = ({ options, inputName, name, value, onChange, label, placeHolder }) => (
  <div className="content">
    <label className="input-label" htmlFor={inputName}>
      {label}
    </label>
    <div className="select-input">
      <div className="content">
        <label className="select-label" htmlFor={name}>
          {value}
        </label>
        <select className="select" name={name} id={name} value={value} onChange={onChange}>
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

DropdownButton.propTypes = {
  options: PropTypes.array.isRequired,
  inputName: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeHolder: PropTypes.string,
};

DropdownButton.defaultProps = {
  options: [],
  inputName: '',
  name: '',
  value: '',
  onChange: () => {},
  label: '',
  placeHolder: '',
};

export default DropdownButton;
