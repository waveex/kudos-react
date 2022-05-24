import React from "react";
import { StyledWrapper } from "./FormHeader.styles";
import icon from "../../../assets/img/icons/agreement-purple.svg";
import { Heading } from "../../atoms/Heading/Heading";
import { Link } from "react-router-dom";
import { Icon } from "../../atoms/Icon/Icon";
import close from "../../../assets/img/icons/close.svg";
import Button from "../../atoms/Button/Button";


const FormHeader = ({handleCloseModal}) => {
  return (
    <StyledWrapper>
      <Icon src={icon} />
      <Heading >Utwórz kudos</Heading>
        <Icon onClick={handleCloseModal} src={close} />
    </StyledWrapper>
  );
};

export default FormHeader;
