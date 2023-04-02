import { combineReducers } from '@reduxjs/toolkit';

import { reducer as counter } from './counterSlices';

export const rootReducer = combineReducers({
  counter,
});
