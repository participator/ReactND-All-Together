import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './Components/UserForm.js';
import UserList from './Components/UserList.js';
import ErrorMsg from './Components/ErrorMsg.js';
import GamesPlayed from './Components/GamesPlayed.js';

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
  const [hideGamesPlayed, setHideGamesPlayed] = useState(false);
  
  const checkUsernameNoConflict = (user) => {
  	return users.every((current) => {
		return user.username !== current.username;
    });
  }
  
  const addUser = (user) => {
    const noConflict = checkUsernameNoConflict(user);
    
  	if (noConflict) {
      setUsers([...users, user]);
      console.log('noConflict', isNotConflict, 'added', user, 'users', users);
    }
    
    setIsNotConflict(noConflict);
  }
  
  return (
    <div>
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
      </div>
	 <UserForm onAddUser={ addUser } />
		<ErrorMsg 
			show={ !isNotConflict } 
			message={ `The username is already in use.  Try a different username.` } />
		
		<GamesPlayed 
			hideGamesPlayed={ hideGamesPlayed } 
			setHideGamesPlayed= { setHideGamesPlayed } />

		<UserList
			users={ users }
			hideGamesPlayed= { hideGamesPlayed } />
	</div>
    );
}

export default App;
