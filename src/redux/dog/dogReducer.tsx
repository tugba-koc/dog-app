// import * as ACTION_TYPES from '../actions/action_type';
import { IAction, ActionType, IState } from '../../types/reducer';
import { RootState } from '../store';

export const dogInitialState: IState = {
  breed: 'all',
  subBreed: 'all',
  number: '1',
  imageResults: 0,
  error: false,
};

const dogReducer = (state = dogInitialState, action: IAction): IState => {
  switch (action.type) {
    case ActionType.BREED:
      return {
        ...state,
        breed: action.payload,
      };
    case ActionType.SUB_BREED:
      return {
        ...state,
        subBreed: action.payload,
      };
    case ActionType.NUMBER:
      return {
        ...state,
        number: action.payload,
      };
    case ActionType.IMAGE_RESULTS:
      return {
        ...state,
        imageResults: action.payload,
      };
    case ActionType.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ActionType.RESET:
      return {
        breed: 'all',
        subBreed: 'all',
        number: '1',
        imageResults: 0,
        error: false,
      };
    default:
      return state;
  }
};

export const selectBreedState = (state:RootState) => state.dogReducer?.breed;
export const selectSubBreedState = (state:RootState) => state.dogReducer?.subBreed;
export const selectNumber = (state:RootState) => state.dogReducer?.number;
export const selectError = (state:RootState) => state.dogReducer?.error;
export const selectImageResults = (state:RootState) => state.dogReducer?.imageResults;
export default dogReducer;
