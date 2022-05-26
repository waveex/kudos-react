import React from "react";
import { Text } from "../../atoms/Text/Text";
import Kudos from "../../molecules/Kudos/Kudos";
import PropTypes from "prop-types";
import { StyledWrapper } from "./KudosList.styled";
import { Controller } from "react-hook-form";

const KudosList = ({ kudoses, control }) => {
  return (
    <StyledWrapper>
      <Text>Wybierz kudos</Text>
      <Controller
        control={control}
        name="selectedKudos"
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) =>
          kudoses.map((kudoses) => (
            <Kudos
              key={kudoses.id}
              name={name}
              kudoses={kudoses}
              id={kudoses.id}
              img={kudoses.img}
              description={kudoses.description}
              title={kudoses.title}
              onChange={onChange}
            />
          ))
        }
      />
    </StyledWrapper>
  );
};
KudosList.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  key: PropTypes.number,
};

export default KudosList;
