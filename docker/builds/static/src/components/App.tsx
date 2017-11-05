import * as React from 'react';
import { curry } from 'lodash';
import { Grid, Row, Col } from 'react-bootstrap';
import { IntlProvider } from 'react-intl';
import './App.css';
import TweetPanel from './TweetPanel';
import FilterTweetInput from './FilterTweetInput';
import InformationModal from './InformationModal';
import { FilterableTweet, Tweet } from '../types';

const logo = require('./logo.png');

export interface Props {
  highlightedWord: string;
  showModal: boolean;
  rawTweets: Tweet[];
  tweets: FilterableTweet[];
  getRecentTweets: () => void;
  dismissModal: () => void;
  filterTweets: (tweets: Tweet[], filterBy: string) => void;
}

class App extends React.Component<Props, {}> {
  componentWillMount() {
    const {getRecentTweets} = this.props;
    getRecentTweets();
    setInterval(getRecentTweets, 60 * 1000);
  }
  render() {
    const {
      highlightedWord, tweets, rawTweets,
      filterTweets, showModal, dismissModal
    } = this.props;
    return (
      <IntlProvider locale="en">
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="h4" style={{marginTop: 16}}>Recent Tweets from @Salesforce</h1>
          </div>
          <Grid>
            <Row>
              <Col xs={12}>
                <FilterTweetInput onKeyDown={curry(filterTweets)(rawTweets)}/>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                {tweets
                  .filter(({ disabled }) => !disabled)
                  .map((tweet, index) =>
                    <TweetPanel
                      key={`tweet-${tweet.id}`}
                      {...{
                        tweet,
                        index: index + 1,  // Human readable
                        highlightedWord
                      }}
                    />)}
              </Col>
            </Row>
          </Grid>
          <InformationModal showModal={showModal} dismissModal={dismissModal} />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
