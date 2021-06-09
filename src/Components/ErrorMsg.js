import React from 'react';
import PropTypes from 'prop-types';

const ErrorMsg = props => {
	return (
    	props.show &&
      	<div>{ props.message }</div>
    )
}

ErrorMsg.propTypes = {
	message: PropTypes.string.isRequired
}

export default ErrorMsg;