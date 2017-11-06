import * as React from 'react';
import App from './App';
import { create } from 'react-test-renderer';
import { noop } from 'lodash';

it('App renders correctly', () => {
  const tree = create(
    <App
        highlightedWord="test"
        showModal={false}
        rawTweets={[]}
        tweets={[]}
        getRecentTweets={noop}
        dismissModal={noop}
        filterTweets={noop}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});