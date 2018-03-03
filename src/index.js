import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Main containers
import App from './scenes/home/App';
import Influencers from './scenes/influencers/influencers';
import Profile from './scenes/profile/profile';
import WhatWeDo from './scenes/whatwedo/whatwedo';
import Dashboard from './platform/dashboard/dashboard';
import OpenOffers from './platform/open-offers/open-offers';
import OfferDetails from './platform/offer-details/offer-details';
import Bank from './platform/bank/bank';

import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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


// Components
import NfHeader from './components/header/nf-header';
import NfFooter from './components/footer/nf-footer';
import NfSideNav from './components/side-nav/nf-side-nav';
import NfPlatformHeader from './components/platform-header/nf-platform-header';

import './index.css';

const nfReducers = combineReducers({
  featured, filters, feed, offers,
  nav, influencers, orders, bookings, login
});


const store = createStore(nfReducers, applyMiddleware(...[thunk]));

class RouteWrapperPlatform extends Component {
  render() {
    return (
      <div className="platform-wrapper">
        <NfSideNav/>
        <div className="platform-content">
          <NfPlatformHeader/>
          {this.props.component}
        </div>
      </div>
    );
  }
}

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
      <div>
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
        <Route path="/dashboard" component={() => (
          <RouteWrapperPlatform component={<Dashboard/>}/>
        )}/>
        <Route path="/offers" component={() => (
          <Switch>
            <Route exact path="/offers" component={() => (
              <RouteWrapperPlatform component={<OpenOffers/>}/>)
            }/>
            <Route exact path="/offers/:type?" component={() => (
              <RouteWrapperPlatform component={<OpenOffers/>}/>)
            }/>
            <Route exact path="/offers/details/:id" component={() => (
              <RouteWrapperPlatform component={<OfferDetails/>}/>)
            }/>
          </Switch>
        )}/>
        <Route path="/bank" component={() => (
          <Switch>
            <Route exact path="/bank" component={() => (
              <RouteWrapperPlatform component={<Bank/>}/>)
            }/>
            <Route exact path="/bank/deposit" component={() => (
              <RouteWrapperPlatform component={<Bank/>}/>)
            }/>
            <Route exact path="/bank/withdraw" component={() => (
              <RouteWrapperPlatform component={<Bank/>}/>)
            }/>
            <Route exact path="/bank/transactions" component={() => (
              <RouteWrapperPlatform component={<Bank/>}/>)
            }/>
          </Switch>
        )}/>
      </div>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

registerServiceWorker();
