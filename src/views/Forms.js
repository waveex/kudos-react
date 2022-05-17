import React from 'react';
import { NotesWrapper } from './Forms.styles';
import Form from '../components/organisms/Form/Form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Forms = ({kudoses, persons}) => {
    return (
       <NotesWrapper>
           <Form kudoses={kudoses} persons={persons} />
       </NotesWrapper>
    );
}
Forms.propTypes = {
    kudoses: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ),
    persons: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isActive: PropTypes.bool.isRequired,
      }),
    ),
  };
  Forms.defaultProps = {
    kudoses: [],
    persons: [],
  };

  const mapStateToProps = state => ({
    kudoses: state.kudosState,
    persons: state.personsState,
  });
export default connect(mapStateToProps)(Forms);
