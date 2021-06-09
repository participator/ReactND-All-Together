import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './Components/UserForm.js';
import ErrorMsg from './Components/ErrorMsg.js';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

/**
* No duplicate usernames
* Show error message when duplicate username is attempted
*
* Add button disabled when user fields are not complete
*
* "Hide the Number of Games Played" button
* makes games played count 0
*
* "Show the Number of Games Played"
* shows games played count
*/

const App = () => {
  const [users, setUsers] = useState([]);
  const [isNotConflict, setIsNotConflict] = useState(true);
  
  const checkUsernameNoConflict = (user) => {
  	const noConflict = users.every((current) => {
		return user.username !== current.username;
    });
    
    setIsNotConflict(noConflict);    
  }
  
  const addUser = (user) => {    
  	if (isNotConflict) {
      setUsers([...users, user]);
      console.log('noConflict', isNotConflict, 'added', user, 'users', users);
    }
  }
  
  return (
    <div>
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
      </div>
	 <UserForm
		onAddUser={addUser}
		noConflict={checkUsernameNoConflict}
		/>
		<ErrorMsg 
			show={!isNotConflict} 
			message={ `The username is already in use.  Try a different username.` } 
			/>
      <div>
          <button onClick={console.log}>Hide the Number of Games Played</button>
          <h2>List of Users</h2>
          <div>
              <ul>
                  <li>[username] played 0 games</li>
              </ul>
          </div>
      </div>
	</div>
    );
}

export default App;
