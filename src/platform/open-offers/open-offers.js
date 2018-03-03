import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, NavLink} from 'react-router-dom';
import {
  requestOffers, selectOffer, refreshOffers,
  deleteOffers, markSeen, nextPage, previousPage
} from '../../actions/offers';
import {NfLiftBox} from '../../components/utility/nf-utility';
import {withRouter} from 'react-router-dom';

import NfOffer from './components/nf-offer';
import NfPaginationContainer from './components/nf-pagination-container';

import './open-offers.css';

class OpenOffers extends Component {

  constructor(props) {
    super(props);
    this.state = {q: ''};
  };

  componentDidMount = () => {
    const {dispatch, match} = this.props;
    dispatch(requestOffers(match.params.type));
  };

  onChecked = (value, id) => {
    this.props.dispatch(selectOffer(value, id));
  };

  onRefresh = () => {
    this.props.dispatch(refreshOffers());
  };

  onDelete = () => {
    this.props.dispatch(deleteOffers());
  };

  onSeen = () => {
    this.props.dispatch(markSeen())
  };

  onNext = () => {
    this.props.dispatch(nextPage());
  };

  onPrevious = () => {
    this.props.dispatch(previousPage());
  };

  searchOnClick = (e) => {
    e.preventDefault();
    this.props.dispatch(requestOffers(this.props.match.params.type, this.state.q));
  };

  render() {
    const {items, page, pageSize, match} = this.props;

    return (
      <div className="container-fluid mt-2 open-offers-wrapper">
        <NfLiftBox header={
          <div className="row ai-center">
            <div className="col-lg-8">
              <span className="text-left mb-0"> Offers({this.props.items.length})</span>
            </div>
            <div className="col-lg-4 text-right">
              <form onSubmit={this.searchOnClick}>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search" value={this.state.q}
                         onChange={ (e) => this.setState({q: e.target.value})}/>
                  <span className="input-group-addon platform-btn">Search</span>
                </div>
              </form>
            </div>
          </div>
        } content={
          <div className="open-offers-container">
            <div className="row mb-2">
              <div className="col-lg-12">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <NavLink className="nav-link" exact to="/offers" activeClassName="active">All</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/offers/open" activeClassName="active">Open</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/offers/pending" activeClassName="active">Pending</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/offers/declined" activeClassName="active">Declined</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/offers/completed" activeClassName="active">Completed</NavLink>
                  </li>
                  <li className="nav-item items-center ml-auto">
                    <div className="text-right">
                      <span className="action-btn-group">
                        <button className="btn btn-white btn-sm" onClick={this.onSeen}><i className="fa fa-eye"/>
                        </button>
                        <button className="btn btn-white btn-sm" onClick={this.onDelete}><i className="fa fa-trash-o"/>
                        </button>
                        <button className="btn btn-white btn-sm" onClick={this.onRefresh}><i className="fa fa-refresh"/>
                          Refresh
                        </button>
                      </span>
                      <span className="btn-group ml-2">
                        <button className="btn btn-white btn-sm" onClick={this.onPrevious}><i
                          className="fa fa-arrow-left"/>
                        </button>
                        <button className="btn btn-white btn-sm" onClick={this.onNext}><i
                          className="fa fa-arrow-right"/>
                        </button>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <NfPaginationContainer items={items} page={page} pageSize={pageSize} getContent={(item) => (
              <div className="row offer-row" key={item.id}>
                <div className="col-lg-12">
                  <NfOffer offer={item} onChecked={this.onChecked} type={match.params.type}/>
                </div>
              </div>
            )}>
            </NfPaginationContainer>
          </div>
        }/>
      </div>
    );
  }
}


const mapStateToProps = (state) => state.offers;
export default withRouter(connect(mapStateToProps)(OpenOffers));
