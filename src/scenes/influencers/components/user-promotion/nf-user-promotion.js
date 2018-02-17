import React, {Component} from 'react';
import './nf-user-promotion.css';
import GraphTimeController from '../../../../components/graph-controller/graph-time-controller';

class NfUserPromotion extends Component {

  constructor(props) {
    super(props);
    this.index = Math.floor(Math.random() * 20) + 1;
  }

  suffixedNumber = (number) => {
    return number > 999 ? (number / 1000).toFixed(1) + 'k' : number;
  };

  cutText = (text) => {
      if(text.length > 20)
        return text.substring(0, 20) + '...';
      return text;
  };

  render() {
    return (
        <div className="user-promotion">
          <div className="user-promotion-header">
            <img src={require('../../../../resources/images/random/' + this.index + '.jpg')} alt="Promoted post"
                 className="img-fluid user-promotion-picture"/>
            <h5 className="user-promotion-title">
              <a href="" className="pl-1">@{this.props.item.username}</a>
            </h5>
          </div>
          <div className="user-promotion-body">
            <div className="user-promotion-desc">
              <p title={this.props.item.description}> {this.cutText(this.props.item.description)}</p>
            </div>
            <p> Last online: <span className="highlighted">{GraphTimeController.humanReadableTime(this.props.item.last_online)}</span>
            </p>
            <p> Followers: <span className="highlighted">{this.suffixedNumber(this.props.item.followers)}</span></p>
            <p> Avg. price: <span className="highlighted">${this.props.item.charge}</span></p>
          </div>
          <div className="user-promotion-footer">
            <a href="">
              <span className="user-profile"> See profile</span>
            </a>
          </div>
        </div>
    );
  }
}

export default NfUserPromotion;
