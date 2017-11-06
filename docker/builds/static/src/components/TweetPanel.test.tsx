import * as React from 'react';
import { IntlProvider } from 'react-intl';
import TweetPanel from './TweetPanel';
import { create } from 'react-test-renderer';
import { FilterableTweet } from '../types';

const mockTweet: FilterableTweet = {
    'id': 927523478357663700,
    'user': {
        'id': 33612317,
        'name': 'Salesforce',
        'screen_name': 'salesforce',
        'friends_count': 50032,
        'profile': {
            'mini': 'http://pbs.twimg.com/profile_images/716283264881700865/voT_NePC_mini.jpg',
            'normal': 'http://pbs.twimg.com/profile_images/716283264881700865/voT_NePC_normal.jpg',
            'bigger': 'http://pbs.twimg.com/profile_images/716283264881700865/voT_NePC_bigger.jpg',
            'default': 'http://pbs.twimg.com/profile_images/716283264881700865/voT_NePC.jpg'
        }
    },
    'text':
        `If coding makes you feel😱, you'll😊 this. NEW myEnstein` +
        ` lets you build AI-powered apps with just a few mouse clicks.… https://t.co/FdOPeF5G0j`,
    'created_at': '1509973804000',
    'entities': {
        'hashtags': [],
        'media': []
    },
    'favorite_count': 5,
    'retweet_count': 4,
    'coordinates': null,
    disabled: false
};

it('TweetPanel renders correctly', () => {
  const tree = create(
    <IntlProvider locale="en">
        <TweetPanel
            tweet={mockTweet}
            index={0}
            highlightedWord={''}
        />
    </IntlProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});