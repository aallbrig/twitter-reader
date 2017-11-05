import * as React from 'react';
import { Panel, Media, Row, Col } from 'react-bootstrap';
import { FormattedNumber, FormattedDate, FormattedTime } from 'react-intl';
import { FilterableTweet } from '../types';
const Highlight = require('react-highlighter')

export interface Props {
    tweet: FilterableTweet;
    index: number;
    highlightedWord: string;
}

export const TweetPanel: React.SFC<Props> = ({ tweet, index, highlightedWord }) => (
    <Panel
        {...(tweet.disabled ? {
            bsStyle: 'danger',
            // className: 'text-muted'
        } : {})}
        footer={tweet.entities.media.length > 0 && (
            <Row>
                <Col xs={12}>
                    <h4>Attached Media</h4>
                    {tweet.entities.media.map(({ id, url}) => (
                        <Media key={`media-${id}`}>
                            <a href={url} target="_blank">
                                <img
                                    className="thumbnail img-responsive"
                                    src={url}
                                    style={{maxHeight: 250}}
                                />
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
                {tweet.user.name}
                <br />
                {`@${tweet.user.screen_name}`}
                <br />
                <br />
                {'Friends:'}
                <br className="visible-xs"/>
                {` `}
                <FormattedNumber value={tweet.user.friends_count} />
            </Col>
            <Col xs={7} style={{ wordWrap: 'break-word' }}>
                <h4>Tweet ID: {tweet.id}</h4>
                <div className="text-muted" style={{ marginBottom: 10 }}>
                    <FormattedTime value={tweet.created_at} />
                    {' '}
                    <FormattedDate
                        value={tweet.created_at}
                        year="numeric"
                        month="long"
                        day="2-digit"
                    />
                </div>
                <Highlight
                    search={highlightedWord}
                    matchElement="span"
                    matchClass="bg-danger"
                    matchStyle={{ border: '1px solid red' }}
                >
                    {tweet.text}
                </Highlight>
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
            <Col xs={2} sm={3}>
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
