import React, {Component} from 'react';
import './nf-collapse-item.css';

class NfCollapseItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasCollapsed: false
    };
  }

  onItemCollapse = () => {
    this.setState({hasCollapsed: !this.state.hasCollapsed})
  };

  render() {
    return (
      <div className="card collapse-card">
        <div className="card-header collapse-header" role="tab">
          <h6 className="mb-0">
            <a data-toggle="collapse" href={'#collapse' + this.props.toggle} aria-expanded="true"
               aria-controls="collapseOne" onClick={this.onItemCollapse}>
              <i className={(() => {
                return this.state.hasCollapsed ? 'fa fa-angle-right' : 'fa fa-angle-down';
              })()} aria-hidden="true"/>
              {this.props.header}
            </a>
          </h6>
        </div>
        <div id={'collapse' + this.props.toggle} className="collapse" role="tabpanel" aria-labelledby="headingOne"
             data-parent="#accordion">
          <div className="card-body collapse-body">
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
}

export default NfCollapseItem;
