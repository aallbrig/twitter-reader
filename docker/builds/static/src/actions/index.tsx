import * as constants from '../constants';

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export interface GetRecentTweets {
    type: constants.GET_RECENT_TWEETS;
    payload: Promise<Response>;
}
export interface GetRecentTweetsFulfilled {
    type: constants.GET_RECENT_TWEETS_FULFILLED;
    payload: Response;
}

export type EnthusiasmAction =
    IncrementEnthusiasm | DecrementEnthusiasm
    | GetRecentTweets | GetRecentTweetsFulfilled;

export type TweetAction = GetRecentTweets;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}

export function getRecentTweets(): GetRecentTweets {
    return {
        type: constants.GET_RECENT_TWEETS,
        payload: fetch('/api/get_recent_tweets').then((res) => res.json())
    };
}