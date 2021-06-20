import { createReducer, on, Action } from '@ngrx/store';
import {IGlobalState} from '../state/global-state';
import {TestAction} from '../actions/global.actions';

export const initialState: IGlobalState = {
  test: 'hi'
}


export const globalReducer = createReducer(
  initialState,
  on(TestAction,
    (state: IGlobalState, action) => {
      return Object.assign({}, state, { test: action.payload })
    }),
)
