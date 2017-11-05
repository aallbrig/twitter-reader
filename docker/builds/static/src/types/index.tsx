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
    id: string,
    text: string,
    entities: Entity
};
export interface StoreState {
    tweets: Tweet[];
    languageName: string;
    enthusiasmLevel: number;
}
