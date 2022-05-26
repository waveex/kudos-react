import React from "react";
import { StyledWrapper } from "./FormHeader.styles";
import icon from "../../../assets/img/icons/agreement-purple.svg";
import { Heading } from "../../atoms/Heading/Heading";
import close from "../../../assets/img/icons/close.svg";
import PropTypes from "prop-types";


const FormHeader = ({handleCloseModal}) => {
  return (
    <StyledWrapper>
      <Icon src={icon} />
      <Heading >Utwórz kudos</Heading>
        <Icon onClick={handleCloseModal} src={close} />
    </StyledWrapper>
  );
};
FormHeader.propTypes = {
  icon: PropTypes.string,
  handleCloseModal: PropTypes.func,
  close: PropTypes.string
};
export default FormHeader;
