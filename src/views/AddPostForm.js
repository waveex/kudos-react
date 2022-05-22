import React from 'react';
import { NotesWrapper } from './AddPostForm.styles';
import KudosList from '../components/organisms/KudosList/KudosList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormHeader from '../components/molecules/FormHeader/FormHeader';
import PostForm from '../components/molecules/PostForm/PostForm';
import { Text } from '../components/atoms/Text/Text';
import PersonSelect from '../components/molecules/PersonSelect/PersonSelect';

const AddPostForm = ({kudoses, persons, handleCloseModal }) => {
    return (
       <NotesWrapper>
            <FormHeader handleCloseModal={handleCloseModal} />
            <PostForm persons={persons} />
            <Text>Wybierz osobę, której przyznajesz kudos</Text>
            <PersonSelect persons={persons} />
        <KudosList kudoses={kudoses} />
       </NotesWrapper>
    );
}
AddPostForm.propTypes = {
    kudoses: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      }),
    ),
    persons: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number,
        isActive: PropTypes.bool,
      }),
    ),
  };

export default AddPostForm;
