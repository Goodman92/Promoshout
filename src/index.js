import React from 'react';
import ReactDOM from 'react-dom';
import App from './scenes/home/App';
import Influencers from './scenes/influencers/influencers';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import featured from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

import NfHeader from './components/header/nf-header';
import NfFooter from './components/footer/nf-footer';

import './index.css';

const store = createStore(featured, applyMiddleware(...[thunk]));

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div>
          <section role="navigation">
            <NfHeader/>
          </section>
          <Route exact path="/" component={App}/>
          <Route path="/influencers" component={Influencers}/>
          <section role="footer">
            <NfFooter/>
          </section>
        </div>
      </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
