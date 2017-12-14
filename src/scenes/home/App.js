import React, {Component} from 'react';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome-webpack-2';

import NfRegistration from './components/nf-registration';
import NfPerks from './components/nf-perks';
import NfFeatured from './components/nf-featured';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section role="register">
          <div className="container-fluid registration-wrapper">
            <NfRegistration/>
          </div>
        </section>
        <section role="perks" className="mb-5">
          <NfPerks/>
        </section>
        <section role="featured">
          <NfFeatured/>
        </section>
      </div>
    );
  }
}

export default App;
