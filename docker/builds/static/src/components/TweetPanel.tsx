import * as React from 'react';
import { Panel, Media } from 'react-bootstrap';
import { FilterableTweet } from '../types';

export interface Props {
    tweet: FilterableTweet;
}

export const TweetPanel: React.SFC<Props> = ({ tweet }) => (
    <Panel
        {...(tweet.disabled ? {
            bsStyle: 'danger',
            className: 'text-muted'
        } : {})}
    >
        <h4>Tweet ID: {tweet.id}</h4>
        {tweet.text}
        {tweet.entities.hashtags.length > 0 && (
            <div>
                <hr />
                <h5>Hashtags: {tweet.entities.hashtags.map(({ tag }) => tag).join(', ')}</h5>
            </div>
        )}
        {tweet.entities.media.length > 0 && (
            <div>
                <hr />
                {tweet.entities.media.map(({ id, url}) => (
                    <Media key={`media-${id}`}>
                        <a href={url} target="_blank">
                            <img src={url} />
                        </a>
                    </Media>
                ))}
            </div>
        )}
    </Panel>
);

export default TweetPanel;
