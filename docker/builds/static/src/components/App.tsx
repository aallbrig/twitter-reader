import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import TweetPanel from './TweetPanel';
import FilterTweetInput from './FilterTweetInput';
import { Tweet } from '../types';

const logo = require('./logo.png');

export interface Props {
    dispatch: (action: {}) => void;
    name: string;
    tweets: Tweet[];
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
    getRecentTweets?: () => void;
  }

class App extends React.Component<Props, {}> {
  componentWillMount() {
    const {getRecentTweets} = this.props;
    const foo = getRecentTweets && getRecentTweets();
    (console).log('getRecentTweets', getRecentTweets);
    (console).log('foo', foo);
  }
  render() {
    const {tweets} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Twitter Reader for Target Twitter Account</h2>
        </div>
        <Grid>
          <Row>
            <Col xs={12}>
              <FilterTweetInput />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={10}>
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
