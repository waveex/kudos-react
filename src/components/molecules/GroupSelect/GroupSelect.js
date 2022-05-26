import React from "react";
import Select from "../../atoms/Select/Select";
import { StyledWrapper } from "./GroupSelect.styles";
import { connect } from "react-redux";
import { Controller } from "react-hook-form";
import FixRequiredSelect from "../FixRequiredSelect.js/FixRequiredSelect";
import PropTypes from "prop-types";


const GroupSelect = ({ groups, control }) => {
  const FixedSelect = (props) => (
    <FixRequiredSelect {...props} SelectComponent={Select} />
  );
  const options = groups.map((group) => {
    return {
      value: `${group.name}`,
      label: group.name,
      id: group.id,
    };
  });
  return (
    <Controller
      control={control}
      name="selectGroup"
      render={({
        field: { onChange }
             }) => (
        <StyledWrapper>
          <FixedSelect
            className="selectGroup"
            group
            options={options}
            onChange={onChange}
          />
        </StyledWrapper>
      )}
    />
  );
};
GroupSelect.propTypes = {
  options:  PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      id: PropTypes.number,
    })
  ),
  onChange: PropTypes.func,
  value: PropTypes.number,
  name: PropTypes.string
};
const mapStatetoProps = (state) => ({
  groups: state.groupState,
});

GroupSelect.defaultProps = {
  groups: {},
};

export default connect(mapStatetoProps, null)(GroupSelect);
