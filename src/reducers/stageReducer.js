export default function reducer(state={
    info: {
      id: null,
      name: null
    },
    list: [],
    count:0,
    onPlay: null,
    error: null,
  }, action) {

    switch (action.type) {
      case "PLAY_STAGED":{
        return {...state,onPlay:action.music}
      }
      
      case "ADD_TO_STAGE":{
        const _stage = {...state};
        _stage.list.push(action.payload),
        _stage.count++;
        return _stage;
      }

  }
   return state;
}
