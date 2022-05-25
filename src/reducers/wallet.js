// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  ADD_API_TO_STATE,
  LOADING_ENABLED,
  ADD_EXPENSE_TO_STATE,
  LOADING_DISABLED,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
};
const Wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_API_TO_STATE:
    return {
      ...state,
      currencies: [...action.currencies],
      loading: action.loading,
    };
  case LOADING_ENABLED:
    return {
      ...state,
      loading: true,
    };
  case LOADING_DISABLED:
    return {
      ...state,
      loading: false,
    };
  case ADD_EXPENSE_TO_STATE:
    return {
      ...state,
      loading: false,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default Wallet;
