// Coloque aqui suas actions
export const ADD_USER_TO_STATE = 'ADD_USER_TO_STATE';
export const ADD_API_TO_STATE = 'ADD_API_TO_STATE';
export const LOADING_ENABLED = 'LOADING_ENABLED';
export const LOADING_DISABLED = 'LOADING_DISABLED';
export const ADD_EXPENSE_TO_STATE = 'ADD_EXPENSE_TO_STATE';
export const DELETE_EXPENSE_TO_STATE = 'DELETE_EXPENSE_TO_STATE';

export const addUserToState = (user) => ({
  type: ADD_USER_TO_STATE,
  user,
});
export const addApiToState = (currencies) => ({

  type: ADD_API_TO_STATE,
  loading: false,
  currencies,
});
export const ActiveLoading = () => ({
  type: LOADING_ENABLED,
  loading: true,
});
export const disabledLoading = () => ({
  type: LOADING_DISABLED,
  loading: false,
});
export const addExpenseToState = (payload) => ({
  type: ADD_EXPENSE_TO_STATE,
  payload,
  loading: false,
});
export const deleteExpenseToState = (payload) => ({
  type: DELETE_EXPENSE_TO_STATE,
  payload,
});

export const fetchApi = () => async (dispatch) => {
  dispatch(ActiveLoading());
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(URL);
  const data = await response.json();
  delete data.USDT;
  const datakey = Object.keys(data);
  dispatch(addApiToState(datakey));
};
export const fetchApiExpense = (state) => async (dispatch) => {
  dispatch(ActiveLoading());
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(URL);
  const data = await response.json();
  const payload = {
    ...state,
    exchangeRates: data,
  };
  dispatch(addExpenseToState(payload));
};
