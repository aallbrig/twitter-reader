import * as React from 'react';
import { Panel, Media, Row, Col } from 'react-bootstrap';
import { FormattedNumber } from 'react-intl';
import { FilterableTweet } from '../types';

export interface Props {
    tweet: FilterableTweet;
    index: number;
}

export const TweetPanel: React.SFC<Props> = ({ tweet, index }) => (
    <Panel
        {...(tweet.disabled ? {
            bsStyle: 'danger',
            className: 'text-muted'
        } : {})}
        footer={tweet.entities.media.length > 0 && (
            <Row>
                <Col xs={12}>
                    <hr />
                    <h4> Attached Media </h4>
                    {tweet.entities.media.map(({ id, url}) => (
                        <Media key={`media-${id}`}>
                            <a href={url} target="_blank">
                                <img className="thumbnail" src={url} />
                            </a>
                        </Media>
                    ))}
                </Col>
            </Row>
        )}
    >
        <Row>
            <Col xs={3} sm={2}>
                <img
                    src={tweet.user.profile.default}
                    className="img-responsive thumbnail"
                />
                {'Friend count:'}
                <br className="visible-xs"/>
                {` `}
                <FormattedNumber value={tweet.user.friends_count} />
                <br />
            </Col>
            <Col xs={6}>
                <h4>Tweet ID: {tweet.id}</h4>
                {tweet.text}
                {tweet.entities.hashtags.length > 0 && (
                    <div>
                        <hr />
                        <h5>
                            {'Hashtags: '}
                            {tweet.entities.hashtags
                                .map(({ tag }) => `#${tag}`).join(', ')}
                        </h5>
                    </div>
                )}
            </Col>
            <Col xs={3} sm={4}>
                <div className="pull-right text-right">
                    <p>
                        <span className="badge">{index}</span>
                    </p>
                    <p>
                        {'Favorite'}
                        <span className="hidden-xs">
                            {' count:'}
                        </span>
                        <br className="visible-xs"/>
                        {' '}
                        <i className="glyphicon glyphicon-heart" />
                        {` ${tweet.favorite_count}`}
                    </p>
                    <p>
                        {'Retweet'}
                        <span className="hidden-xs">
                            {' count:'}
                        </span>
                        <br className="visible-xs"/>
                        {' '}
                        <i className="glyphicon glyphicon-sunglasses" />
                        {` ${tweet.retweet_count}`}
                    </p>
                </div>
            </Col>
        </Row>
    </Panel>
);

export default TweetPanel;
