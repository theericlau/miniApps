import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//import the root reducer

//create an object for default data
const defaultState = {
  data,
}

const store = createStore(rootReducer, defaultState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ));


export const history = syncHistoryWithStore(createBrowserHistory() as any, store);
export default store;