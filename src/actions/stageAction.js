export function addMusic(id,music) {
  return {
    type: 'ADD_TO_STAGE',
    payload: {
      id,
      music
    }
  }
}

export function play(id, music) {
  return {
    type: 'PLAY_STAGED',
    payload: {
      id,
      music
    }
  }
}