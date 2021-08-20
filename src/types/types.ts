export interface ITodo {
  id: string;
  task: string;
  complete: boolean;
}

export enum TaskActionTypes {
  ADD_TASK = 'ADD_TASK',
  REMOVE_TASK = 'REMOVE_TASK',
  TASK_IS_CCOMPLETE = 'TASK_IS_CCOMPLETE',
}

export enum ValidationTypes {
  SET_ERROR = 'SET_ERROR',
  REMOVE_ERROR = 'REMOVE_ERROR',
  IS_VALID = 'IS_VALID',
}

export interface IAddTaskAction {
  type: TaskActionTypes.ADD_TASK;
  payload: string;
}

export interface IRemoveTaskAction {
  type: TaskActionTypes.REMOVE_TASK;
  payload: ITodo[];
}

export interface IToogleTaskStatus {
  type: TaskActionTypes.TASK_IS_CCOMPLETE;
  payload: ITodo[];
}

export interface IErrors {
  input?: string;
  isValid: boolean;
}

export interface IIsValidAction {
  type: ValidationTypes.IS_VALID;
  payload: IErrors;
}

export interface ISetInputErrorsAction {
  type: ValidationTypes.SET_ERROR;
}

export interface IRemoveInputErrorsAction {
  type: ValidationTypes.REMOVE_ERROR;
}

export type ErrorAction = IIsValidAction | ISetInputErrorsAction | IRemoveInputErrorsAction;
export type Action = IAddTaskAction | IRemoveTaskAction | IToogleTaskStatus;
