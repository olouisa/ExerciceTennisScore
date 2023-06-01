import React from 'react';
import { useSelector } from 'react-redux';

function Display() {
const player1Score = useSelector((state) => state.player1);
const player2Score = useSelector((state) => state.player2);
const winner = useSelector((state) => state.winner);
const advantage = useSelector((state) => state.advantage);
const playing = useSelector((state) => state.playing);

if(winner) {
  if(winner=== "player1") {
    return (
      <div>
      <p className="display" id="score">Joueur 1 gagne</p>
    </div>
    )
  } else {
    return (
      <div>
      <p className="display" id="score">Joueur 2 gagne</p>
    </div>
    )
  }
} else if(playing === false) {
  return (
    <div>
    <p className="display" id="score">C'est la pause</p>
  </div>
  )
} else {
  let text =  `Le score est: ${player1Score} - ${player2Score}`;
  if(advantage) {
    if(advantage === "player1") {
      return (
        <div>
    <p className="display" id="score">{text} avantage joueur 1 </p>
  </div>
      )
    } else {
      return (
        <div>
        <p className="display" id="score">{text} avantage joueur 2 </p>
      </div>
      )

    }
  } else {
    return (
      <div>
      <p className="display" id="score">{text}</p>
    </div>
    )
  }

}

  // return (
  //   <div>
  //     <p className="display" id="score">Le score est : {player1Score} - {player2Score} </p>
  //   </div>
  // )
}

export default Display

// function updateScoreText(
//   playing,
//   winner = null,
//   player1Score = 0,
//   player2Score = 0,
//   advantage = null
// ) {
//   if (winner) {
//     if (winner === "player1") {
//       score.innerHTML = "Joueur 1 gagne";
//     } else {
//       score.innerHTML = "Joueur 2 gagne";
//     }
//   } else if (playing === false) {
//     score.innerHTML = "C'est la pause";
//   } else {
//     let text = "Le score est: " + player1Score + " - " + player2Score;
//     if (advantage) {
//       if (advantage === "player1") {
//         text += " avantage joueur 1";
//       } else {
//         text += " avantage joueur 2";
//       }
//     }
//     score.innerHTML = text;
//   }
// }