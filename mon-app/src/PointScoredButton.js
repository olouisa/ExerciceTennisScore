import React from 'react';
import { pointScoreAction } from './actions';
import { useDispatch } from 'react-redux';

function PointScoredButton({playerId}) {
  const dispatch = useDispatch();
  return (
    <div>
           <button onClick={() => {dispatch(pointScoreAction(playerId))}} className="button" id="player-1">{ playerId === `player1` ?`Point Joueur 1` : `Point Joueur 2`}</button>
          </div>
  )
}

export default PointScoredButton
