import * as React from 'react';
import { curry } from 'lodash';
import { Grid, Row, Col, Popover, OverlayTrigger } from 'react-bootstrap';
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

export interface State {
  shake: boolean;
}

class App extends React.Component<Props, State> {
  state = {
    shake: true
  };
  componentWillMount() {
    const {getRecentTweets} = this.props;
    getRecentTweets();
    setTimeout(() => this.setState({ shake: false }), 800);
    setInterval(
      () => {
        this.setState(
          () => ({
            shake: true
          }),
          () => {
            getRecentTweets();
            setTimeout(() => this.setState({ shake: false }), 800);
          }
        );
      },
      10 * 1000
    );
  }
  render() {
    const {
      highlightedWord, tweets, rawTweets,
      filterTweets, showModal, dismissModal
    } = this.props;
    const { shake } = this.state;
    return (
      <IntlProvider locale="en">
        <div className="App">
          <div className="App-header">
            <OverlayTrigger
              placement="bottom"
              overlay={(
                <Popover id="logo-tooltip">
                  Every time this shakes, a new "get recent tweets from target user" request is sent.
                </Popover>
              )}
              trigger={['click', 'hover', 'focus']}
              delayHide={2000}
            >
              <img src={logo} className={`App-logo${shake ? ' shake-chunk shake-freeze' : ''}`} alt="logo" />
            </OverlayTrigger>
            <h1 className="h4" style={{marginTop: 22}}>Recent Tweets from @Salesforce</h1>
          </div>
          <Grid>
            <Row>
              <Col xs={12}>
                <FilterTweetInput onKeyDown={curry(filterTweets)(rawTweets)}/>
                <OverlayTrigger
                  placement="bottom"
                  overlay={(
                    <Popover id="logo-tooltip">
                      {`REST web server's HTTP cache clears after approximately `}
                      {'one minute.  HTTP cache is used here to reduce my application\'s use '}
                      {'of Twitter\'s API.'}
                    </Popover>
                  )}
                  trigger={['click', 'hover', 'focus']}
                  delayHide={2000}
                >
                  <span>
                    <i className="glyphicon glyphicon-repeat Cache-Reset" />
                    {' Time until REST server cache clears.'}
                  </span>
                </OverlayTrigger>
                <br />
                <OverlayTrigger
                  placement="right"
                  overlay={(
                    <Popover id="logo-tooltip">
                      {'For comparison.'}
                    </Popover>
                  )}
                  trigger={['click', 'hover', 'focus']}
                  delayHide={2000}
                >
                  <span>
                    <i className="glyphicon glyphicon-repeat Second-Interval" />
                    {' One second timer'}
                  </span>
                </OverlayTrigger>
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
