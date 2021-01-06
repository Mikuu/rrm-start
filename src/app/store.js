import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import rootReducer from './rootReducer';

export default configureStore({
  // reducer: {
    // counter: counterReducer,
  // },
  reducer: rootReducer
});
