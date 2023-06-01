import React from 'react';
import { useSelector } from 'react-redux';
import { SelectHasAdvantage } from './selectors';


function PlayerScore({playerId, playerName}) {
const score = useSelector((state) => state[playerId]);
const hasAdvantage = useSelector(SelectHasAdvantage(playerId))

  return (
    <div className='player-score'>
      <p>{playerName}</p>
      <p>{hasAdvantage ? "Avantage -": ""} {score}</p>
    </div>
  )
}

export default PlayerScore
