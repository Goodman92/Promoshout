import React, {Component} from 'react';
import NfPerkBlock from './nf-perk-block';
import './nf-perks.css';

class NfPerks extends Component {

  constructor(props) {
    super(props);
    this.mock = [
      {key: 1, title: 'Fast', desc: 'Register just with few click, receive funds instantly'},
      {key: 2, title: 'Simple', desc: 'Manage all your campaings via our extremely flexible marketing platform.'},
      {
        key: 3,
        title: 'Transparent',
        desc: 'Our commission fee is 10%. Lower the trade fees by increasing your PromoScore'
      },
      {
        key: 4, title: 'Secure', desc: 'Only secured HTTPS-connections are used. Backbone of the transactions is ' +
      'Paypal\'s secure services.'
      },
    ]
  }

  render() {
    return (
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-lg-12 mt-4">
              <h1 className="perks-main-title"> Premium Instagram influencer marketplace</h1>
            </div>
          </div>
          <div className="row perk-blocks"> {
            this.mock.map((item, index) => (
                <div className="col-xs-12 col-lg-3" key={item.key}>
                  <NfPerkBlock title={item.title} desc={item.desc}/>
                </div>
            ))
          }
          </div>
        </div>
    );
  }
}

export default NfPerks;
