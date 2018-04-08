import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

// Containers
import Dashboard from './dashboard/dashboard';
import OpenOffers from './open-offers/open-offers';
import OfferDetails from './offer-details/offer-details';
import Deposit from './bank/deposit';
import Withdraw from './bank/withdraw';
import History from './bank/history';
import Tickets from './tickets/tickets';
import Settings from './settings/settings';
import General from './settings/general';
import Privacy from './settings/privacy';
import Delete from './settings/delete';
import AccountManager from './account-manager/account-manager';
import Connections from './connections/connections';

// Components
import NfSideNav from '../components/side-nav/nf-side-nav';
import NfPlatformHeader from '../components/platform-header/nf-platform-header';
import NfChat from '../components/chat/nf-chat';

// Sockets
import {chatSocketInitializer} from '../actions/sockets';

class PlatformContainer extends Component {

  constructor(props) {
    super(props);
    chatSocketInitializer(props.dispatch);
  }

  render() {
    return (
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
        <NfChat/>
      </div>
    );
  }
}

export default PlatformContainer;