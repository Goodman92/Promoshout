import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './scenes/home/App';
import Influencers from './scenes/influencers/influencers';
import Profile from './scenes/profile/profile';
import WhatWeDo from './scenes/whatwedo/whatwedo';
import Dashboard from './platform/dashboard/dashboard';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {combineReducers} from 'redux'

import featured from './reducers/index';
import filters from './reducers/filters';
import nav from './reducers/nav';
import influencers from './reducers/influencers';

import registerServiceWorker from './registerServiceWorker';

import NfHeader from './components/header/nf-header';
import NfFooter from './components/footer/nf-footer';
import NfSideNav from './components/side-nav/nf-side-nav';
import NfPlatformHeader from './components/platform-header/nf-platform-header';

import './index.css';

const nfReducers = combineReducers({
  featured, filters,
  nav, influencers
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
          <Route path="/profile" component={() => (
              <RouteWrapper component={<Profile/>}/>
          )}/>
          <Route path="/whatwedo" component={() => (
              <RouteWrapper component={<WhatWeDo/>}/>
          )}/>
          <Route path="/dashboard" component={() => (
              <RouteWrapperPlatform component={<Dashboard/>}/>
          )}/>
        </div>
      </Router>
    </Provider>
    ,
    document.getElementById('root')
);

registerServiceWorker();
