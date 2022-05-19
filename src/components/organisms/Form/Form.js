import React from "react";
import { Text } from "../../atoms/Text/Text";
import AddKudoForm from "../../molecules/AddKudoForm/AddKudoForm";
import FormHeader from "../../molecules/FormHeader/FormHeader";
import GroupSelect from "../../molecules/GroupSelect/GroupSelect";
import PersonSelect from "../../molecules/PersonSelect/PersonSelect";
import PostForm from "../../molecules/PostForm/PostForm";
import PropTypes from "prop-types";

const Form = ({ kudoses, persons}) => {
  return (
    <>
      <FormHeader />
      <PostForm />
      <Text >Wybierz osobę, której przyznajesz kudos</Text>
      <PersonSelect persons={persons} />
      <Text >Wybierz kudos</Text>
      {
        kudoses.map(({ title, description, img, id }) => (
        <AddKudoForm
          title={title}
          description={description}
          img={img}
          key={id}
        />
      ))}
      <Text >Wybierz grupę</Text>
      <GroupSelect />
    </>
  );
};
Form.propTypes = {
  kudoses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      img: PropTypes.string,
      id: PropTypes.number,
      isActive: PropTypes.bool,
    })
  ),
};

Form.defaultProps = {
  kudoses: {},
  persons: {},
};
export default Form;
