import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Main containers
import App from './scenes/home/App';
import Influencers from './scenes/influencers/influencers';
import Profile from './scenes/profile/profile';
import WhatWeDo from './scenes/whatwedo/whatwedo';

// Main platform containers
import PlatformContainer from './platform/container';

import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {combineReducers} from 'redux'


// Reducers
import featured from './reducers/index';
import filters from './reducers/filters';
import nav from './reducers/nav';
import orders from './reducers/orders';
import feed from './reducers/feed';
import bookings from './reducers/bookings';
import influencers from './reducers/influencers';
import login from './reducers/login';
import offers from './reducers/offers';
import tickets from './reducers/tickets';
import offerModal from './reducers/offer-modal';
import connections from './reducers/chat';
import {default as transactions} from './reducers/transactions';


// Components
import NfHeader from './components/header/nf-header';
import NfFooter from './components/footer/nf-footer';


import './index.css';

const nfReducers = combineReducers({
  featured, filters, feed, offers, transactions,
  nav, influencers, orders, bookings, login, tickets, offerModal, connections});

const middlewares = [thunk];

const store = createStore(nfReducers, applyMiddleware(...middlewares));

class RouteWrapper extends Component {
  render() {
    return (
      <div className="h-100">
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
      <div className="relative">
        <Route exact path="/" component={() => (
          <RouteWrapper component={<App/>}/>
        )}/>
        <Route path="/influencers" component={() => (
          <RouteWrapper component={<Influencers/>}/>
        )}/>
        <Route path="/profile" component={() => (
          <RouteWrapper component={<Profile/>}/>
        )}/>
        <Route path="/whatwedo" component={() => (
          <RouteWrapper component={<WhatWeDo/>}/>
        )}/>
        <Route path="/platform" component={() => (
          <PlatformContainer dispatch={store.dispatch}/>
        )}>
        </Route>
      </div>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

registerServiceWorker();
