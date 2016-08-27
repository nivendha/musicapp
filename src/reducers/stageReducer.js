export default function reducer(state = {
    info: {
        id: null,
        name: null
    },
    list: {},
    count: 0,
    onPlay: null,
    onStage:null,
    error: null,
}, action) {

    switch (action.type) {
        case "PLAY_STAGED":
            {
                return {...state, onPlay: action.music }
            }

        case "ADD_TO_STAGE":
            {
                const _list = {...state.list };
                _list[action.payload.id] = action.payload;
                return {
                    ...state,
                    count: state.count + 1,
                    list: _list,
                }
            }
        case "STAGE_MUSIC":
            {
               return {...state,onStage:action.payload.id}
            }


    }
    return state;
}
