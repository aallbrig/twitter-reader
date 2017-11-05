export type Media = {
    id: string,
    url: string
};
export type Hashtag = {
    tag: string
};
export type Entity = {
    hashtags: Hashtag[],
    media: Media[]
};
export type Tweet = {
    id: number,
    text: string,
    entities: Entity
};
export type FilterableTweet = Tweet & {
    disabled: boolean
};
export type GetRecentTweetsResponse = {
    status: 'OK',
    tweets: Tweet[]
};

export interface TweetState {
    tweets: Tweet[];
}
export interface FilterableTweetState {
    filterBy: string;
    filteredTweets: FilterableTweet[];
}
export interface StoreState {
    tweets: TweetState;
    filterTweets: FilterableTweetState;
}
