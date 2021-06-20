import {createAction, props, Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {IGlobalState} from '../state/global-state';

export const TestAction = createAction('[Global Action] Test Action',
  props<{payload: string}>());

@Injectable()
export class GlobalActions {
  private store: Store<IGlobalState>;
  constructor(store: Store<IGlobalState>) {
    this.store = store;
  }

  Ui = {
    Test: (data) => {
      alert('in the action');
      this.store.dispatch(TestAction({payload: data}));
    }
  };
  Data = {};
}
