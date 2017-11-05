import * as constants from '../constants';
import { GetRecentTweetsResponse, Tweet } from '../types';

export interface GetRecentTweets {
    type: constants.GET_RECENT_TWEETS;
    payload: Promise<Response>;
}
export interface GetRecentTweetsFulfilled {
    type: constants.GET_RECENT_TWEETS_FULFILLED;
    payload: GetRecentTweetsResponse;
}

export interface FilterTweets {
    type: constants.FILTER_TWEETS_INPUT;
    payload: {
        filter: string,
        tweets: Tweet[]
    };
}

export type TweetAction = GetRecentTweets & GetRecentTweetsFulfilled;

export type FilterAction = GetRecentTweetsFulfilled & FilterTweets;

export function getRecentTweets(): GetRecentTweets {
    return {
        type: constants.GET_RECENT_TWEETS,
        payload: fetch('/api/get_recent_tweets').then((res) => res.json())
    };
}

export function filterTweets(tweets: Tweet[], filterBy: string): FilterTweets {
    return {
        type: constants.FILTER_TWEETS_INPUT,
        payload: {
            filter: filterBy,
            tweets
        }
    };
}
