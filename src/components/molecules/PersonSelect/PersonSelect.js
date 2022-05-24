import React from "react";
import PropTypes from "prop-types";
import Select from "../../atoms/Select/Select";
import { Text } from "../../atoms/Text/Text";
import { StyledWrapper } from "./PersonSelect.styles";
import { Controller } from "react-hook-form";

const PersonSelect = ({ persons, register, control }) => {
  return (
    <StyledWrapper>
      <Text>Wybierz osobę, której przyznajesz kudos</Text>
      <Controller
        control={control}
        name="select"
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <Select
          onChange={onChange}
        name={name}
        multi
        placeholder="Wybierz osobę lub osoby"
        isMulti
        options={persons.map(({ name, id }) => ({
          value: { id },
          label: `${name}`,
        }))}
      />
        )}
      />

    </StyledWrapper>
  );
};

PersonSelect.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};

PersonSelect.defaultProps = {
  persons: {},
};

export default PersonSelect;
