import React from 'react';
import { Text } from '../../atoms/Text/Text';
import AddKudoForm from '../../molecules/AddKudoForm/AddKudoForm';
import FormHeader from '../../molecules/FormHeader/FormHeader';
import GroupSelect from '../../molecules/GroupSelect/GroupSelect';
import PersonSelect from '../../molecules/PersonSelect/PersonSelect';
import PostForm from '../../molecules/PostForm/PostForm';

const Form = () => {
    return (
       <>
           <FormHeader />
            <PostForm />
            <Text form>Wybierz osobę, której przyznajesz kudos</Text>
            <PersonSelect persons={persons} />
            <Text>Wybierz kudos</Text>
            {kudoses.map(({title, description, img, id}) => (
                <AddKudoForm title={title} description={description} img={img} key={id} />

            ))}
            <Text form>Wybierz grupę</Text>
            <GroupSelect />
       </>
    );
}
Form.propTypes = {
    kudoses: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      }),
    ),
    persons: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isActive: PropTypes.bool.isRequired,
      }),
    ),
  };

  Form.defaultProps = {
    kudoses: {},
    persons: {},
  };
export default Form;
