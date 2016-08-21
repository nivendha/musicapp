import uniqueid from "uniqueid"
const prefix = uniqueid('m');

export function addToList(name,path,music) {
const id=prefix();
  return {
    type: 'ADD_TO_DOCK',
    payload: {
      id,
      name,
      path,
      music
    }
  }
}

export function stageMusic(id) {
  return {
    type: 'STAGE_MUSIC',
    payload: {
      id
    }
  }
}