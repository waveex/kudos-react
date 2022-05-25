import React from "react";
import { Icon } from "../../atoms/Icon/Icon";
import Select from "../../atoms/Select/Select";
import { OptionWrapper, StyledWrapper } from "./GroupSelect.styles";
import iconCity from "../../../assets/img/icons/city-solid.svg";
import { Text } from "../../atoms/Text/Text";
import { connect } from "react-redux";
import { Controller } from "react-hook-form";


const GroupSelect = ({ groups, control }) => {
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
    name="Group"
    render={({
      field: { onChange, onBlur, value, name, ref },
      fieldState: { invalid, isTouched, isDirty, error },
      formState,
    }) => (
      <StyledWrapper>
      <Select  options={options} onChange={onChange}  />
    </StyledWrapper>
    )}
  />
  );
};
const mapStatetoProps = (state) => ({
  groups: state.groupState,
});

GroupSelect.defaultProps = {
  groups: {},
};

export default connect(mapStatetoProps, null)(GroupSelect);
