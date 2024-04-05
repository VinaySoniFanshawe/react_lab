import { ADD_TRANSACTION, SET_TRANSACTIONS, UPDATE_VALUES } from './financeActionTypes';

const initialState = {
    max: null,
    min: null,
    total: 0,
    data: [],
    count: 0
};

const financeReducer = (state = initialState, action) => {
    const findMax = (list) => {
        if (list.length == 0) {
            return
        }
        return list.reduce(function (prev, curr) {
            return prev.amount > curr.amount ? prev : curr;
        });
    }

    const findMin = (list) => {
        if (list.length == 0) {
            return
        }
        return list.reduce(function (prev, curr) {
            return prev.amount < curr.amount ? prev : curr;
        });
    }

    const findTotal = (list) => {
        var total = 0
        list.forEach((transaction) => { total += transaction.amount })
        return total
    }

    switch (action.type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                data: [...state.data, action.payload],
            };
        case SET_TRANSACTIONS:
            return {
                ...state,
                data: action.payload
            };
        case UPDATE_VALUES: 
            return {
                ...state,
                count: state.data.length,
                max : findMax(state.data),
                min : findMin(state.data),
                total : findTotal(state.data),
            }
        default:
            return state;
    }
};

export default financeReducer;
