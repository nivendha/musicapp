import uniqueid from "uniqueid"
const prefix = uniqueid('m');

export function addToList(name,path,info) {
const id=prefix();
  return {
    type: 'ADD_TO_DOCK',
    payload: {
      id,
      name,
      path,
      info
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