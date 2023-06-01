export const playPauseAction = () => ({
    type: "playPause"
  });
  export const  pointScoreAction = (player) => ({
    type: "pointScored",
    payload: { player : player }
  });
  export const resetAction = () => ({
    type: "reset"
  })