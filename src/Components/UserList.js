import React from 'react';
import PropTypes from 'prop-types';

const UserList = ( props ) => {
  return (
    <div>
    	<h2>List of Users</h2>
    	<ul>
    		{ props.users && props.users.map( user => {
    			let played = props.hideGamesPlayed ? '\\*' : user.gamesPlayed ;
    			return <li key={user.username}>{user.username} played { played } games</li>
				}
			)}
  		</ul>
  	</div>
  );
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  hideGamesPlayed: PropTypes.bool.isRequired,
}

export default UserList;