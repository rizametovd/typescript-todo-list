import { v4 as uuid } from 'uuid';
import { Action, ITodo, TaskActionTypes } from '../types/types';

const initialState: ITodo[] = [];

export const tasksReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK:
      return [...state, { id: uuid(), task: action.payload, complete: false }];
    case TaskActionTypes.REMOVE_TASK:
      return [...action.payload];
    case TaskActionTypes.TASK_IS_CCOMPLETE:
      return [...action.payload];
    default:
      return state;
  }
};
