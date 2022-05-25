// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_USER_TO_STATE } from '../actions';

const INITIAL_STATE = {
  email: 'heferaj478@akapple.com',
};
function user(state = INITIAL_STATE, action) {
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
