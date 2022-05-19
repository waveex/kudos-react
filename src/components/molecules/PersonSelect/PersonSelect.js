import React from 'react';
import PropTypes from 'prop-types';
import Select from '../../atoms/Select/Select';


const PersonSelect = ({ persons }) => (
  <Select
    multi
    placeholder=""
    isMulti
    options={persons.map(({ name, id }) => ({ value: { id }, label: `${name}` }))}
  />
);

PersonSelect.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
};

PersonSelect.defaultProps = {
  persons: {},
};

export default PersonSelect;