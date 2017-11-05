import * as React from 'react';
import { Panel, Media } from 'react-bootstrap';
import { Tweet } from '../types';

export interface Props {
    tweet: Tweet;
}

export const TweetPanel: React.SFC<Props> = ({ tweet }) => (
    <Panel>
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
                {tweet.entities.media.map(media => (
                    <Media key={`media-${media.id}`}>
                        <img src={media.url} />
                    </Media>
                ))}
            </div>
        )}
    </Panel>
);

export default TweetPanel;
