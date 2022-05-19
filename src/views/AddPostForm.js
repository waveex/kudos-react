import React from 'react';
import { NotesWrapper } from './AddPostForm.styles';
import Form from '../components/organisms/Form/Form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AddPostForm = ({kudoses, persons }) => {
    return (
       <NotesWrapper>
           <Form kudoses={kudoses} persons={persons} />
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
