import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// playPauseAction

function PlayPauseButton() {
  const dispatch = useDispatch();
 const display = useSelector((state) => state.playing);

  return (
    <div>
       <button onClick={() => {dispatch({type: "playPause"})}}  class="button" id="pause"> { display === true ? `Pause` : `Reprendre`}</button>
    </div>
  )
}

export default PlayPauseButton
