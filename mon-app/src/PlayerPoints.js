import React from 'react';
import { useSelector } from 'react-redux';

function PlayerPoints({playerId, playerName}) {
    const score = useSelector((state) => state[playerId]);
    const numberWun = useSelector((state) => state.history.filter((item) => { return item.winner === playerId}).length);
    console.log(numberWun);
    
      return (
        <div className='player-score'>
          <p>{playerName}</p>
          <p>{ numberWun === 0 ? "Aucun jeu gagné" : numberWun > 1 ? `${numberWun} jeux gagnés` : `${numberWun} jeu gagné`}</p>
        </div>
      )
}

export default PlayerPoints
