import React, {Component} from 'react';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome-webpack-2';
import NfHeader from '../../components/header/nf-header';
import NfRegistration from './components/nf-registration';
import NfPerks from './components/nf-perks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section role="navigation">
          <NfHeader/>
        </section>
        <section role="register">
          <div className="container-fluid registration-wrapper">
            <NfRegistration/>
          </div>
        </section>
        <section role="perks">
          <NfPerks/>
        </section>
      </div>
    );
  }
}

export default App;
