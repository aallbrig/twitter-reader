import * as React from 'react';
import { curry } from 'lodash';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import TweetPanel from './TweetPanel';
import FilterTweetInput from './FilterTweetInput';
import { FilterableTweet, Tweet } from '../types';

const logo = require('./logo.png');

export interface Props {
  rawTweets: Tweet[];
  tweets: FilterableTweet[];
  getRecentTweets: () => void;
  filterTweets: (tweets: Tweet[], filterBy: string) => void;
}

class App extends React.Component<Props, {}> {
  componentWillMount() {
    const {getRecentTweets} = this.props;
    getRecentTweets();
    setInterval(getRecentTweets, 60 * 1000);
  }
  render() {
    const {tweets, rawTweets, filterTweets} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Recent Tweets from @Salesforce</h2>
        </div>
        <Grid>
          <Row>
            <Col xs={12}>
              <FilterTweetInput onKeyDown={curry(filterTweets)(rawTweets)}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              {tweets.map(tweet =>
                <TweetPanel key={`tweet-${tweet.id}`} tweet={tweet}/>)}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
