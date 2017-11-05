import * as React from 'react';
import * as ReactDOM from 'react-dom';
import promiseMiddleware from 'redux-promise-middleware';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import { StoreState } from './types/index';
import App from './containers/App';
import { Provider } from 'react-redux';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [
  promiseMiddleware()
];
const store = createStore<StoreState>(
  rootReducer,
  {
    tweets: {
      tweets: []
    },
    filterTweets: {
      filterBy: '',
      filteredTweets: []
    }
  },
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
