import React, {Component} from 'react';
import NfPerkBlock from './nf-perk-block';
import './nf-perks.css';

class NfPerks extends Component {

  constructor(props) {
    super(props);
    this.mock = [
      {key: 1, title: 'Fast', desc: 'Register just with few click, receive funds instantly, NEED moar mock text HUEHUEHUE', 
        icon: 'c-green fa fa-flag-checkered fa-1x'
      },
      {
        key: 2,
        title: 'Transparent',
        desc: 'Our commission fee is 10%. Lower the trade fees by increasing your PromoScore',
        icon: 'c-purple fa fa-clone fa-1x'
      },
      {key: 3, title: 'Simple', desc: 'Manage all your campaings via our extremely flexible marketing platform.',
        icon: 'c-blue fa fa-dot-circle-o fa-1x'},

      {
        key: 4, title: 'Secure', desc: 'Only secured HTTPS-connections are used. Backbone of the transactions is' +
      'Paypal\'s secure services.', 
        icon: 'c-red fa fa-lock fa-1x'
      },
      {
        key: 5, title: 'Quality', desc: 'Consectetur adipicing elit sed dotam eiusmod tempor incididunt labe etae magna aliqua.' +
      'Paypal\'s secure services.', 
        icon: 'c-dark-blue fa fa-star-o fa-1x'
      },
      {
        key: 6, title: 'Support', desc: 'Consectetur adipicing elit sed dotam eiusmod tempor incididunt labe etae magna aliqua.' +
      'Paypal\'s secure services.', 
        icon: 'c-orange fa fa-comment-o fa-1x'
      },
    ]
  }

  render() {
    return (
        <div className="container">
          <div className="row mb-3">
            <div className="col-lg-12 mt-4">
              <h1 className="perks-main-title"> Why We Are Best </h1>
              <p className="perks-main-content">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etae magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ea commodo consequat.</p>
            </div>
          </div>
          <div className="row perk-blocks"> {
            this.mock.map((item, index) => (
                <div className="col-xs-12 col-lg-4" key={item.key}>
                  <NfPerkBlock title={item.title} desc={item.desc} icon={item.icon} />
                </div>
            ))
          }
          </div>
        </div>
    );
  }
}

export default NfPerks;
