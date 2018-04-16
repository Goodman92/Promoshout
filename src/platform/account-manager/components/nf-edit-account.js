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
            <p className="gl-bold">Description</p>
            <textarea className="form-control" placeholder="Description" value={account.description}
                      onChange={() => null}/>
            <small>
              <p className="c-light-grey">This is a description text that will be shown on your social media account's profile page</p>
            </small>
          </div>
          <div>
            <p className="d-block gl-bold">Pricing model</p>
            <small>
              <p className="c-light-grey">Define your pricing model, eg. 4h/5$. Optionally you can omit duration and instead use keywords like
                lifetime or even biolink
              </p>
            </small>
          </div>
          {account.pricing.map((item, index) => (
              <div className="form-group row mt-2" key={index}>
                <div className="col-lg-3">
                  <input className="form-control" type="text" placeholder="Duration" value={item.duration}
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
          <p className="pointer" onClick={this.newPricingOnClick}>
            <i className="fa fa-plus c-success mr-1" aria-hidden="true"/>
            <p className="d-inline pointer gl-bold facebook-blue">Add new pricing model</p>
          </p>
          <div className="text-center mt-5">
            <button type="submit" className="btn platform-btn btn-lg-sides">Save</button>
          </div>
        </form>
    );

    const renderNoAccount = () => (
        <p className="text-muted"> No account selected </p>
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
