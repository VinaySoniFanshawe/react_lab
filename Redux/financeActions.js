import { ADD_TRANSACTION, SET_TRANSACTIONS, UPDATE_VALUES } from './financeActionTypes';

export const addTransaction = (transaction) => ({
  type: ADD_TRANSACTION,
  payload: transaction
});

export const setTransaction = (transaction_list) => ({
  type: SET_TRANSACTIONS,
  payload: transaction_list
});

export const updateValues = () => ({
    type: UPDATE_VALUES,
    payload: null
})