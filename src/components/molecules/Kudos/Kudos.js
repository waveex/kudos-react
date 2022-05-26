import React, { useState } from "react";
import { Heading } from "../../atoms/Heading/Heading";
import { Icon } from "../../atoms/Icon/Icon";
import { Text } from "../../atoms/Text/Text";
import { DescriptionWrapper, Input, StyledWrapper } from "./Kudos.styles";
import PropTypes from "prop-types";

const Kudos = ({ img, title, description, id, onChange, kudoses }) => {

  return (
    <>
      <Input
        id={id}
        type="radio"
        onChange={onChange}
        value={id}
        name="slecetKudos"

      />
      <StyledWrapper htmlFor={id}>
        <Icon kudos src={`${img}`} />
        <DescriptionWrapper>
          <Text kudos>{title}</Text>
          <Heading kudo>{description}</Heading>
        </DescriptionWrapper>
      </StyledWrapper>
    </>
  );
};
Kudos.propTypes = {
  id: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string
};
export default Kudos;
