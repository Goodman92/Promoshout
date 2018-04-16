import React, {Component} from 'react';

import '../account-manager.css';

class NfConnectedAccounts extends Component {

  editOnClick = (e, item) => {
    e.preventDefault();
    this.props.editOnClick(item);
  };

  render() {
    const getSomeClass = (type) => {
      if (type === 'facebook')
        return 'fa-facebook-official facebook-blue';
      if (type === 'instagram')
        return 'fa-instagram instagram-color';
      return 'fa-twitter-square twitter-blue';
    };

    return (
        <div className="account-selection">
          {this.props.accounts.map((item, index) => (
              <p key={index}>
                <i className={"fa mr-1 ".concat(getSomeClass(item.type))} aria-hidden="true"/>
                {item.name}
                <span className="pull-right">
                  <a className="pointer gl-bold" onClick={(e) => this.editOnClick(e, item)}>
                    Edit
                    <i className="fa fa-angle-double-right" aria-hidden="true"/>
                  </a>
                </span>
              </p>
          ))}
        </div>
    );
  }
}

export default NfConnectedAccounts;
