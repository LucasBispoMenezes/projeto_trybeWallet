// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_USER_TO_STATE } from '../actions';

function user(state = {}, action) {
  switch (action.type) {
  case ADD_USER_TO_STATE:
    return {
      ...state,
      ...action.user,
    };
  default:
    return state;
  }
}

export default user;
