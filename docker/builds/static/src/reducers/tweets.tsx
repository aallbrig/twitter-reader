import { TweetAction } from '../actions';
import { TweetState } from '../types/index';
import { GET_RECENT_TWEETS_FULFILLED } from '../constants/index';

export const tweetsInitialState = {
    tweets: []
};
export function tweets(
  state: TweetState = tweetsInitialState,
  action: TweetAction
): TweetState {
  switch (action.type) {
    case GET_RECENT_TWEETS_FULFILLED:
      return {...state, tweets: action.payload.tweets};
    default:
  }
  return state;
}

export default tweets;
