import React from 'react';
import { NotesWrapper } from './AddPostForm.styles';
import Form from '../components/organisms/Form/Form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormHeader from '../components/molecules/FormHeader/FormHeader';
import PostForm from '../components/molecules/PostForm/PostForm';
import { Text } from '../components/atoms/Text/Text';
import PersonSelect from '../components/molecules/PersonSelect/PersonSelect';
import { StyledEditor } from '../components/atoms/Editor/Editor';

const AddPostForm = ({kudoses, persons, handleCloseModal }) => {
    return (
       <NotesWrapper>
            <FormHeader handleCloseModal={handleCloseModal} />
            <PostForm persons={persons} />
            <Text>Wybierz osobę, której przyznajesz kudos</Text>
            <PersonSelect persons={persons} />
           {/* <Form kudoses={kudoses} persons={persons} /> */}
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
  AddPostForm.defaultProps = {
    kudoses: [],
    persons: [],
  };

  const mapStateToProps = state => ({
    kudoses: state.kudosState,
    persons: state.personsState,
  });
export default connect(mapStateToProps)(AddPostForm);
