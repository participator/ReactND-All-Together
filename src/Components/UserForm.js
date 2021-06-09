/**
* Display user first, last, and user name
*
**/
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  
  const updateUser = element => {
    const {first: firstInput, last: lastInput, username: usernameInput } = element.form.children;
    
  	switch (element.name) {
    	case "first":
        		setFirstName(firstInput.value);
        		break;
        case "last":
        		setLastName(lastInput.value);
        		break;
        case "username":
        		setUsername(usernameInput.value);
        		break;
      default:
        	break;
    }
  };
  
  const addNewUser = () => {
    const user = { firstName, lastName, username, gamePlays: 0 };
    console.log('user to add', user);
    props.noConflict(user);
  	props.onAddUser(user);
  }
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
  }
  
  return (    
      <div>
          <form onSubmit={ handleFormSubmit } >
            <input name="first" 
				type="text" 
				placeholder="first" 
				value={ firstName } 
				onChange={event => { updateUser(event.target) } } />
            <input name="last" 
				type="text"
				placeholder="last" 
				value={ lastName }
				onChange={event => { updateUser(event.target) } } />
            <input name="username" 
				type="text" 
				placeholder="username" 
				value={ username } 
				onChange={event => { updateUser(event.target) } } />
            <button 
				onClick={ () => { 
                  addNewUser()
                } }>
				Add
			</button>
          </form>
      </div>
  );
}

UserForm.propTypes = {
  onAddUser: PropTypes.func.isRequired,
  noConflict: PropTypes.func.isRequired
};

export default UserForm;