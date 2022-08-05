import { configureStore } from '@reduxjs/toolkit';
import { firstReducer } from './reducers/firstReducer';

export const store = configureStore({
  reducer: {
    firstReducer: firstReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
