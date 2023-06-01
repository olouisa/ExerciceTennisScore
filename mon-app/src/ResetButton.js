import React from 'react';
import { useDispatch } from 'react-redux';
import { resetAction } from './actions';

function ResetButton() {
const dispatch = useDispatch();

  return (
    <div>
        <button onClick={() =>{dispatch(resetAction())}} className="button" id="reset">Remettre à zéro</button>
    </div>
  )
}

export default ResetButton
