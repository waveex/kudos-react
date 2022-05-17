import React from "react";
import { Wrapper } from "./FormHeader.styles";
import icon from "../../../assets/img/icons/agreement-purple.svg";
import { Heading } from "../../atoms/Heading/Heading";
import { Link } from "react-router-dom";
import { Icon } from "../../atoms/Icon/Icon";
import close from "../../../assets/img/icons/close.svg";
import useModal from "../../../hooks/useModal";
import Button from "../../atoms/Button/Button";

const FormHeader = () => {
  const { handleCloseModal } = useModal();
  return (
    <Wrapper>
      <Icon src={icon} />
      <Heading form>Utwórz kudos</Heading>
        <Button onClick={handleCloseModal}>
        <Icon form src={close} />
        </Button>
    </Wrapper>
  );
};

export default FormHeader;
