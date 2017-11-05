export type Media = {
    id: string,
    url: string
};
export type Hashtag = {
    tag: string
};
export type Entities = {
    hashtags: Array<Hashtag>,
    media: Media[]
};
export type ProfileImage = {
    mini: string,
    normal: string,
    bigger: string,
    default: string
};
export type User = {
    id: number,
    name: string,
    screen_name: string,
    friends_count: number,
    profile: ProfileImage
};
export type Coordinate = {
    coordinates: number[] | null
};
export type Tweet = {
    id: number,
    user: User,
    created_at: string,
    text: string,
    entities: Entities,
    favorite_count: number,
    retweet_count: number,
    coordinates: Coordinate[]
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
