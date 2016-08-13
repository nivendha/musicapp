/*import axios from "axios";

export function fetchTweets() {
  return function(dispatch) {
    axios.get("http://rest.learncode.academy/api/test123/tweets")
      .then((response) => {
        dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
      })
  }
}*/

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


