import React from 'react';
// import PropTypes from 'prop-types';

const DropdownButton = ({
  options,
  inputName,
  name,
  value,
  onChange,
  label,
  placeHolder,
  isDisabled,
}) => {
  return (
    <div className="content">
      <label className="input-label" htmlFor={inputName}>
        {label}
      </label>
      <div className="select-input">
        <div className="content">
          <label className="select-label" htmlFor={name}>
            {value}
          </label>
          <select
            className="select"
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            disabled={isDisabled}
          >
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

// DropdownButton.propTypes = {
//   children: PropTypes.node.isRequired,
//   size: PropTypes.string,
//   display: PropTypes.string,
//   alignItems: PropTypes.string,
//   justifyContent: PropTypes.string,
//   flexDirection: PropTypes.string,
// };

// DropdownButton.defaultProps = {
//   size: 'md',
//   display: 'block',
//   alignItems: 'items-start',
//   justifyContent: 'justify-start',
//   flexDirection: 'flex-row',
// };

export default DropdownButton;
