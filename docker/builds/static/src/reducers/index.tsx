// src/reducers/index.tsx

import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM, GET_RECENT_TWEETS_FULFILLED } from '../constants/index';

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    case GET_RECENT_TWEETS_FULFILLED:
      (console).log('fulfilled!');
      (console).log('action', action);
      // const res: Response = ((action as any).payload as any);
      // (console).log('res', res);
      // (console).log('body', res.json().then(console.log));
      // const tweets = res.tweets;
      // (console).log('tweets!', tweets);
      return {...state, tweets: (action as any).payload.tweets};
    default:
  }
  return state;
}