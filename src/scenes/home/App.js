import React, {Component} from 'react';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NfHeader from '../../components/header/nf-header';
import NfRegistration from './components/nf-registration';

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
      </div>
    );
  }
}

export default App;
