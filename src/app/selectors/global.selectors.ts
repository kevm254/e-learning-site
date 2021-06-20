import {IGlobalState} from '../state/global-state';
import {createFeatureSelector, createSelector, Selector} from '@ngrx/store';

export const GLOBAL_FEATURE_NAME = 'global';
export const globalFeaturesSelector = createFeatureSelector<IGlobalState>(GLOBAL_FEATURE_NAME);

export const TestSelector: Selector<IGlobalState, string> =
createSelector(globalFeaturesSelector, (state: IGlobalState) => state.test);
