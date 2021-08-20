import {
  IAddTaskAction,
  IRemoveInputErrorsAction,
  IRemoveTaskAction,
  ISetInputErrorsAction,
  ITodo,
  IToogleTaskStatus,
  TaskActionTypes,
  ValidationTypes,
} from '../types/types';

export const addTaskAction = (payload: string): IAddTaskAction => {
  return {
    type: TaskActionTypes.ADD_TASK,
    payload,
  };
};

export const removeTaskAction = (payload: ITodo[]): IRemoveTaskAction => {
  return {
    type: TaskActionTypes.REMOVE_TASK,
    payload,
  };
};

export const toggleTaskStatus = (payload: ITodo[]): IToogleTaskStatus => {
  return {
    type: TaskActionTypes.TASK_IS_CCOMPLETE,
    payload,
  };
};

export const setErrors = (): ISetInputErrorsAction => {
  return {
    type: ValidationTypes.SET_ERROR,
  };
};

export const removeError = (): IRemoveInputErrorsAction => {
  return {
    type: ValidationTypes.REMOVE_ERROR,
  };
};

export const checkValidity = (payload: boolean) => {
  return {
    type: ValidationTypes.IS_VALID,
    payload,
  };
};
