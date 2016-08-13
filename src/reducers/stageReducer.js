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
        return {...state,
          list:list.push(action.music),
          count:count++
        }
      }

  }
   return state;
}
