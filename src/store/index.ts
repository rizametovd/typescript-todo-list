import { combineReducers, createStore } from 'redux';
import { inputValidationReducer } from './inputValidationReducer';
import { tasksReducer } from './tasksReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  validationErrors: inputValidationReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);
