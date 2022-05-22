import React from "react";
import { Text } from "../../atoms/Text/Text";
import Kudos from "../../molecules/Kudos/Kudos";
import FormHeader from "../../molecules/FormHeader/FormHeader";
import GroupSelect from "../../molecules/GroupSelect/GroupSelect";
import PersonSelect from "../../molecules/PersonSelect/PersonSelect";
import PostForm from "../../molecules/PostForm/PostForm";
import PropTypes from "prop-types";

const KudosList = ({ kudoses}) => {
  return (
    <>

      <Text >Wybierz kudos</Text>
      {
        kudoses.map((kudoses) => (
        <Kudos
        kudoses={kudoses}
          key={kudoses.id}
          img={kudoses.img}
          description={kudoses.description}
          title={kudoses.title}
        />
      ))}

    </>
  );
};
KudosList.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  key: PropTypes.number
};


export default KudosList;
