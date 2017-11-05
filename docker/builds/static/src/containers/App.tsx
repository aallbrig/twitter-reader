import App from '../components/App';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';
import { Tweet } from '../types';

export function mapStateToProps({
  filterTweets: {
    filterBy: highlightedWord, // alias for UI purposes
    filteredTweets: tweets
  },
  tweets: { tweets: rawTweets }
}: StoreState) {
    return {
      tweets,
      rawTweets,
      highlightedWord
    };
  }
  
export function mapDispatchToProps(dispatch: Dispatch<actions.TweetAction>) {
    return {
      getRecentTweets: () => dispatch(actions.getRecentTweets()),
      filterTweets: (tweets: Tweet[], value: string) => dispatch(actions.filterTweets(tweets, value))
    };
  }

export default (connect(
  mapStateToProps,
  mapDispatchToProps
) as any)(App);
