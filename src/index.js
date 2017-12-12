import React from 'react';
import ReactDOM from 'react-dom';
import App from './scenes/home/App';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import featured from './reducers/index';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(featured, applyMiddleware(...[thunk]));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
