import { combineReducers } from 'redux';
import { StoreState } from '../types/index';
import informationModal from './informationModal';
import filterTweets from './filterTweets';
import tweets from './tweets';

export default combineReducers<StoreState>({
  tweets,
  filterTweets,
  informationModal
});