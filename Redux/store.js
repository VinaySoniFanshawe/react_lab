import { createStore } from 'redux';
import financeReducer from './financeReducer';

const store = createStore(financeReducer);

export default store;
