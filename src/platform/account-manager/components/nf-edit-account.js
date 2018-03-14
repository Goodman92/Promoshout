import React, {Component} from 'react';

import '../account-manager.css';

class NfEditAccount extends Component {

  constructor(props) {
    super(props);
    this.state = {account: null};
  };

  componentWillReceiveProps = (props) => {
    this.setState({...props});
  };

  onRemovePricingClick = (index) => {
    const {account} = this.state;
    this.setState({account: {...account,
        pricing: [...account.pricing.slice(0, index), ...account.pricing.slice(++index)]}});
  };

  newPricingOnClick = (e) => {
    e.preventDefault();
    const {account} = this.state;
    this.setState({account: {...account, pricing: [...account.pricing, {}]}});
  };

  render() {
    const {account} = this.state;

    const renderForm = () => (
        <form>
          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" placeholder="Description" value={account.description}
                      onChange={() => null}/>
            <small> This a description text that will be shown on your social media account's profile page</small>
          </div>
          <div>
            <label className="d-block mb-0">Pricing model</label>
            <small> Define your pricing model, eg. 4h/5$. Optionally you can omit duration and instead use keywords like
              lifetime or even biolink
            </small>
          </div>
          {account.pricing.map((item, index) => (
              <div className="form-group row mt-2" key={index}>
                <div className="col-lg-2">
                  <input className="form-control" type="text" placeholder="Duration/Keyword" value={item.duration}
                         onChange={() => null}/>
                </div>
                <div className="col-lg-3">
                  <input className="form-control" type="number" placeholder="Price" value={item.price}
                         onChange={() => null}/>
                </div>
                <label className="col-form-label" onClick={() => this.onRemovePricingClick(index)}>
                  <i className="fa fa-trash-o" aria-hidden="true"/>
                </label>
              </div>
          ))}
          <p>
            <i className="fa fa-plus c-success mr-1" aria-hidden="true"/>
            <a href="" onClick={this.newPricingOnClick}>Add new pricing model</a>
          </p>
          <div className="text-center mt-5">
            <button type="submit" className="btn platform-btn btn-lg-sides">Save</button>
          </div>
        </form>
    );

    const renderNoAccount = () => (
        <p className="text-muted"> No account selected</p>
    );

    const renderContent = () => {
      if (account)
        return renderForm();
      return renderNoAccount();
    };

    return (
        renderContent()
    );
  }
}

export default NfEditAccount;
