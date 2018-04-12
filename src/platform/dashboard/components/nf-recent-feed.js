import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showMore, showLess, requestFeeds} from '../../../actions/feed';

import {NfSimplePagination} from '../../../components/utility/nf-utility';
import GraphTimeController from '../../../components/graph-controller/graph-time-controller';
import './nf-recent-feed.css';


class NfRecentFeed extends Component {

  spliceData = () => {
    return this.props.items.slice().splice(0, this.props.page * this.props.pageSize);
  };

  componentDidMount = () => {
    this.props.dispatch(requestFeeds());
  };

  render() {
    const data = this.spliceData();

    const renderMessageString = (offerType) => {
      if (offerType === 'offer')
        return "made you an offer";
      return null;
    };

    return (
        <div className="feed-list">
          {data.map((item, index) => (
              <div className="feed-element" key={index}>
                <div className="feed-image">
                  <img className="img-fluid rounded-circle" height="50" width="50" alt="Sender"
                       src="http://webapplayers.com/inspinia_admin-v2.7.1/img/profile.jpg"/>
                </div>
                <div className="feed-body">
                  <div>
                    <p className="mb-0 gl-bold"><strong> {item.sender} </strong> {renderMessageString(item.type)}.</p>
                    <span className="pull-right"> <p className="c-light-grey">{GraphTimeController.humanReadableTime(item.date)}</p></span>
                  </div>
                  <div>
                    <small><p className="c-light-grey">{item.date}</p></small>
                  </div>
                </div>
              </div>
          ))}
          <div className="feed-pagination text-center">
            <NfSimplePagination page={this.props.page} lastPage={3} onShowMore={() => this.props.dispatch(showMore())}
                                onShowLess={() => this.props.dispatch(showLess())}/>
          </div>
        </div>
    );
  }
}

export default connect((state) => state.feed)(NfRecentFeed);