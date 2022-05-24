// Coloque aqui suas actions
export const ADD_USER_TO_STATE = 'ADD_USER_TO_STATE';

const addUserToState = (user) => ({
  type: ADD_USER_TO_STATE,
  user,
});

export default addUserToState;
