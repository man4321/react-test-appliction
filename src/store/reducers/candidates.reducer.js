import store from "..";
import * as Actions from "../actions";
const initialState = {
  candidatesData: [],
  shortListed: [],
  rejected: [],
};
const Candidates = (store = initialState, actions) => {
  switch (actions.type) {
    case Actions.FETCH_CANDIDATES:
      const data = actions.payload.map(value=>{
        return {
          ...value,
          level:Math.floor(Math.random() * 20),
          win:Math.floor(Math.random() * 10),
          lose:Math.floor(Math.random() * 10),
        }
      })
      return {
        ...store,
        candidatesData: actions.payload,
      };
    case Actions.SELECT_PLAYERS:
      return {
        ...store,
        shortListed: actions.payload,
      };
    case Actions.UPDATE_PRICE: {
      const updated = store.candidatesData.map((value) => {
        console.log(value)
        if (value.Name == actions.payload.name) {
          value.Price = actions.payload.data;
        }
        return value;
      });
      return {
        ...store,
        candidatesData: updated,
      };
    }
    default:
      return store;
  }
};
export default Candidates;
