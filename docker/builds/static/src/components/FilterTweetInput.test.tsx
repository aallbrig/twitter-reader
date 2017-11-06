import * as React from 'react';
import FilterTweetInput from './FilterTweetInput';
import { create } from 'react-test-renderer';
import { noop } from 'lodash';

it('FilterTweetInput renders correctly', () => {
  const tree = create(
    <FilterTweetInput onKeyDown={noop} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});