/**
* Defaults to zero
* Displays amount of games user has played
*/
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GamesPlayed = ( props ) => {
  const [textDisplayed, setTextDisplayed] = useState('Hide the Number of Games Played');
  
  const toggleHide = (hide) => {
    if (hide) {
      setTextDisplayed('Hide the Number of Games Played');
      props.setHideGamesPlayed(false);
    }
    else {
      setTextDisplayed('Show the Number of Games Played');
      props.setHideGamesPlayed(true);
    }
  };
  
  return (
    <div>
    	<button onClick={ () => toggleHide(props.hideGamesPlayed) }>{ textDisplayed }</button>
    </div>
  );
};

GamesPlayed.propTypes = {
  hideGamesPlayed: PropTypes.bool.isRequired,
  setHideGamesPlayed: PropTypes.func.isRequired
};

export default GamesPlayed;