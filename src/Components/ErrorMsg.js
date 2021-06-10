import React from 'react';
import PropTypes from 'prop-types';

const ErrorMsg = props => {
	return (
    	props.show &&
      	<p>{ props.message }</p>
    )
}

ErrorMsg.propTypes = {
	message: PropTypes.string.isRequired
}

export default ErrorMsg;