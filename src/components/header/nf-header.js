import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NfLiftBox from '../utility/nf-lift-box';
import './nf-header.css';


class NfPopover extends Component {

  render() {
    const props = this.props;
    console.log("PROPS");
    console.log(props);

    const html = () => (
      props.children
    );

    const renderPopover = () => {
      if (props.show)
        return html();
      return null;
    };

    return (
      <div className="nf-popover">
        {renderPopover()}
      </div>
    )
  }
}

class NfHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {showLogin: false};
  }

  render() {

    const onLoginClick = (e) => {
      e.preventDefault();
      this.setState({showLogin: !this.state.showLogin});
    };

    return (
      <div className="header-wrapper">
        <nav className="navbar navbar-inverse navbar-toggleable-md bg-faded nf-navbar">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <Link to="/" className="navbar-brand main-logo">
            <div className="logo-desktop-wrapper">
              <span className="logo-first-part">Promo</span><span className="logo-last-part">shout</span>
            </div>
            <div className="logo-phone-wrapper">
              <span className="logo-first-part">P</span><span className="logo-last-part">S</span>
            </div>
          </Link>
          <div className="collapse navbar-collapse nf-navbar-list" id="navbarSupportedContent">
            <ul className="navbar-nav nf-nav">
              <li className="nav-item active">
                <Link to="/influencers" className="nav-link">
                  Browse influencers <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/influencers" className="nav-link">
                  Browse brand
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/influencers" className="nav-link">
                  What we do
                </Link>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={(e) => onLoginClick(e)}>Login</span>
                <NfPopover show={this.state.showLogin}>
                  <NfLiftBox header={<span> Sign in</span>} content={
                    <form className="mw-350">
                      <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email"/>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password"/>
                        <small className="form-text text-muted">
                          Forgot your password? Click <a> here </a></small>
                      </div>
                      <button type="submit" className="btn btn-success form-control">
                        Sign in!
                      </button>
                      <small className="form-text text-muted text-center">or</small>
                      <button type="submit" className="btn btn-success form-control">
                        Sign in with Instagram
                      </button>
                    </form>
                  }/>
                </NfPopover>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NfHeader;
