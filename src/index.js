import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './scenes/home/App';
import Influencers from './scenes/influencers/influencers';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { combineReducers } from 'redux'

import featured from './reducers/index';
import filters from './reducers/filters';

import registerServiceWorker from './registerServiceWorker';

import NfHeader from './components/header/nf-header';
import NfFooter from './components/footer/nf-footer';

import './index.css';

const nfReducers = combineReducers({
  featured,
  filters
});


const store = createStore(nfReducers, applyMiddleware(...[thunk]));

class RouteWrapper extends Component {
  render() {
    return (
      <div>
        <section role="navigation">
          <NfHeader/>
        </section>
        {this.props.component}
        <section role="footer">
          <NfFooter/>
        </section>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={() => (
          <RouteWrapper component={<App/>}/>
        )}/>
        <Route path="/influencers" component={() => (
          <RouteWrapper component={<Influencers/>}/>
        )}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
