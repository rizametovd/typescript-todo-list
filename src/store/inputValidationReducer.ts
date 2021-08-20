import { ErrorAction, IErrors, ValidationTypes } from '../types/types';

const initialState: IErrors = {
  isValid: false,
};

export const inputValidationReducer = (state = initialState, action: ErrorAction) => {
  switch (action.type) {
    case ValidationTypes.SET_ERROR: {
      return { ...state, input: 'Минимальная длина 2 символа' };
    }
    case ValidationTypes.REMOVE_ERROR: {
      return { ...state, input: '' };
    }
    case ValidationTypes.IS_VALID: {
      return { ...state, isValid: action.payload };
    }
    default:
      return state;
  }
};
