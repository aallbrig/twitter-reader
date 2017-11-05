import App from '../components/App';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ enthusiasmLevel, languageName, tweets }: StoreState) {
    return {
      enthusiasmLevel,
      name: languageName,
      tweets
    };
  }
  
export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
      onIncrement: () => dispatch(actions.incrementEnthusiasm()),
      onDecrement: () => dispatch(actions.decrementEnthusiasm()),
      getRecentTweets: () => dispatch(actions.getRecentTweets()),
    };
  }

export default (connect(
  mapStateToProps,
  mapDispatchToProps
) as any)(App);
