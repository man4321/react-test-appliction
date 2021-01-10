import axios from "axios";
export const FETCH_CANDIDATES = "FETCH_CANDIDATES";
export const SELECT_PLAYERS = "SELECT_PLAYERS"
export const UPDATE_PRICE = "UPDATE_PRICE";
export function fetchCandidates() {
  return async (dispatch) => {
    const response = await axios.get(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json"
    );
    console.log(response.data)
    return dispatch({
      type: FETCH_CANDIDATES,
      payload: response.data
    });
  };
};

export function shortList(data) {
  return async (dispatch) => {
   
    return dispatch({
      type: SELECT_PLAYERS,
      payload:data
    });
  };
};

export function updatePrice(name,data) {
  const send = {name,data};
  return async (dispatch) => {
    return dispatch({
      type:UPDATE_PRICE,
      payload:send
    });
  };
};


