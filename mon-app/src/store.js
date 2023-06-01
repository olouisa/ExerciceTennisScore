import { createStore } from "redux";
import { produce } from "immer";


const stateInitial = {
  player1: 0,
  player2: 0,
  advantage: null,
  winner: null,
  playing: true,
  history: []

};

export const store = createStore(reducer, stateInitial);



export function reducer(state, action) {
  // Pour mettre en  Play/Pause
  if (action.type === "playPause") {
    return produce(state, (draft) => {
      draft.playing = !draft.playing;
    })
  };

  // Remettre les scores à zéro
  if (action.type === "reset") {
    if (state.winner) {
      return produce(state, (draft) => {
        draft.history.push({
          player1: draft.player1,
          player2: draft.player2,
          winner: draft.winner,
         
        });
        draft.player1 = 0;
        draft.player2 = 0;
        draft.advantage = null;
        draft.winner = null;
        draft.playing = true;
      });
    }

  };

  // Pour affecter le point à un joueur
  if (action.type === "pointScored") {
    const player = action.payload.player;
    const otherPlayer = player === "player1" ? "player2" : "player1";
    const currentPointScored = state[player];

    if (state.winner) {
      return state
    };
    if (state.playing === false) {
      return state
    };

    if (currentPointScored <= 15) {
      return produce(state, (draft) => { draft[player] = currentPointScored + 15 });
    }

    if (currentPointScored === 30) {
      return produce(state, (draft) => { draft[player] = 40 })
    }
    if (currentPointScored === 40) {
      if (state[otherPlayer] !== 40) {
        return produce(state, (draft) => { draft.winner = player });
      }
      if (state.advantage === null) {
        return produce(state, (draft) => { draft.advantage = player });
      }
      if (state.advantage === player) {
        return produce(state, (draft) => { draft.winner = player });
      }
      return produce(state, (draft) => { draft.advantage = null });

    }
  }

  return state;
}

store.subscribe(() => {
  console.log("Nouveau state:");
  console.log(store.getState());
});






