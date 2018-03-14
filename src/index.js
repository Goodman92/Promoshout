import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Main containers
import App from './scenes/home/App';
import Influencers from './scenes/influencers/influencers';
import Profile from './scenes/profile/profile';
import WhatWeDo from './scenes/whatwedo/whatwedo';

// Main platform containers
import Dashboard from './platform/dashboard/dashboard';
import OpenOffers from './platform/open-offers/open-offers';
import OfferDetails from './platform/offer-details/offer-details';
import Deposit from './platform/bank/deposit';
import Withdraw from './platform/bank/withdraw';
import History from './platform/bank/history';
import Tickets from './platform/tickets/tickets';
import Settings from './platform/settings/settings';
import General from './platform/settings/general';
import Privacy from './platform/settings/privacy';
import Delete from './platform/settings/delete';
import AccountManager from './platform/account-manager/account-manager';
import Connections from './platform/connections/connections';

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
import tickets from './reducers/tickets';
import {default as transactions} from './reducers/transactions';


// Components
import NfHeader from './components/header/nf-header';
import NfFooter from './components/footer/nf-footer';
import NfSideNav from './components/side-nav/nf-side-nav';
import NfPlatformHeader from './components/platform-header/nf-platform-header';

import './index.css';

const nfReducers = combineReducers({
  featured, filters, feed, offers, transactions,
  nav, influencers, orders, bookings, login, tickets
});


const store = createStore(nfReducers, applyMiddleware(...[thunk]));

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
        <Route path="/platform" component={() => (
          <div className="platform-wrapper">
            <NfSideNav/>
            <div className="platform-content">
              <NfPlatformHeader/>
              <Switch>
                <Route path="/platform/dashboard" component={() => (<Dashboard/>)}/>
                <Route path="/platform/offers" component={() => (
                  <Switch>
                    <Route exact path="/platform/offers" component={() => (<OpenOffers/>)}/>
                    <Route exact path="/platform/offers/:type?" component={() => (<OpenOffers/>)}/>
                    <Route exact path="/platform/offers/details/:id" component={() => (<OfferDetails/>)}/>
                  </Switch>
                )}/>
                <Route path="/platform/tickets" component={() => (<Tickets/>)}/>
                <Route path="/platform/bank" component={() => (
                  <Switch>
                    <Route exact path="/platform/bank" component={() => (<Deposit/>)}/>
                    <Route exact path="/platform/bank/deposit" component={() => (<Deposit/>)}/>
                    <Route exact path="/platform/bank/withdraw" component={() => (<Withdraw/>)}/>
                    <Route exact path="/platform/bank/transactions" component={() => (<History/>)}/>
                  </Switch>
                )}/>
                <Route path="/platform/settings" component={() => (
                  <Switch>
                    <Route exact path="/platform/settings" component={() => (
                      <Settings>
                        <General/>
                      </Settings>)
                    }/>
                    <Route exact path="/platform/settings/privacy" component={() => (
                      <Settings>
                        <Privacy/>
                      </Settings>)
                    }/>
                    <Route exact path="/platform/settings/delete" component={() => (
                      <Settings>
                        <Delete/>
                      </Settings>)
                    }/>
                  </Switch>
                )}/>
                <Route path="/platform/account-manager" component={() => (<AccountManager/>)}/>
                <Route path="/platform/connections" component={() => (<Connections/>)}/>
              </Switch>
            </div>
          </div>
        )}>
        </Route>
      </div>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

registerServiceWorker();
