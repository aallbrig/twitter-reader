import { curry } from 'lodash';
import { combineReducers } from 'redux';
import {
  TweetAction,
  FilterAction,
  InformationModalAction
} from '../actions';
import { Tweet, FilterableTweet } from '../types';
import {
  StoreState,
  TweetState,
  FilterableTweetState,
  InformationModalState
} from '../types/index';
import {
  GET_RECENT_TWEETS_FULFILLED,
  FILTER_TWEETS_INPUT,
  DISMISS_MODAL
} from '../constants/index';

export const tweetsInitialState = { tweets: [] };
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

function determineTweetState(filterBy: string, tweet: Tweet): FilterableTweet {
  return {
    ...tweet,
    disabled: filterBy !== '' && !(
      tweet.text.includes(filterBy)
      || tweet.entities.hashtags.filter(({tag}) => tag.includes(filterBy)).length > 0
      || tweet.id.toString().includes(filterBy)
    )
  };
}
export const filterTweetsInitialState = {
  filterBy: '',
  filteredTweets: []
};
export function filterTweets(
  state: FilterableTweetState = filterTweetsInitialState,
  action: FilterAction
): FilterableTweetState {
  switch (action.type) {
    case GET_RECENT_TWEETS_FULFILLED:
      const {filterBy: filter} = state;
      return {...state, filteredTweets: action.payload.tweets.map(curry(determineTweetState)(filter))};
    case FILTER_TWEETS_INPUT:
      const filterBy = action.payload.filter;
      const filteredTweets = action.payload.tweets.map(curry(determineTweetState)(action.payload.filter));
      return {...state, ...{filterBy, filteredTweets}};
    default:
  }
  return state;
}

const INFORMATION_MODAL_C_NAME = 'informationModal';
function createCookie(name: string, value: string) {
  const date = new Date();
  date.setTime(date.getTime() + (30 * 1000));
  const expires = `; expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}${expires}; path=/`;
}
function getCookie(name: string) {
  if (document.cookie.length > 0) {
      let start = document.cookie.indexOf(`${name}=`);
      if (start !== -1) {
          start = start + name.length + 1;
          let end = document.cookie.indexOf(';', start);
          if (end === -1) {
              end = document.cookie.length;
          }
          (console).log('document.cookie.substring(start, end)', document.cookie.substring(start, end));
          return document.cookie.substring(start, end);
      }
  }
  return undefined;
}
export const informationModalInitialState = {
  show: getCookie(INFORMATION_MODAL_C_NAME) !== 'false'
};
export function informationModal(
  state: InformationModalState = informationModalInitialState,
  action: InformationModalAction
): InformationModalState {
  switch (action.type) {
    case DISMISS_MODAL:
      createCookie(INFORMATION_MODAL_C_NAME, 'false');
      return { ...state, show: false };
    default:
  }
  return state;
}

export default combineReducers<StoreState>({
  tweets,
  filterTweets,
  informationModal
});