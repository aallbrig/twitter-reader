import { curry } from 'lodash';
import { FilterAction } from '../actions';
import { Tweet, FilterableTweet } from '../types';
import { FilterableTweetState } from '../types/index';
import {
  GET_RECENT_TWEETS_FULFILLED,
  FILTER_TWEETS_INPUT
} from '../constants/index';
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

export default filterTweets;
