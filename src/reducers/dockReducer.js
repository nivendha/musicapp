export default function reducer(state={
   list:[],
   count:0
  }, action) {

    switch (action.type) {
      case "ADD_TO_DOCK":{
        const _list={...state.list};
           _list[action.payload.id]=action.payload;
            return {
            ...state,
            count: state.count+1,
            list: _list,
          }
      }
      
     case "STAGE_MUSIC":{
          const _list={...state.list};
           _list[action.payload.id]=action.payload;
            return {
            ...state,
            count: state.count+1,
            list: _list,
          }
      }

  }
   return state;
}
