import React, {Component} from 'react';

class NfPaginationContainer extends Component {

  spliceData = (items, page, pageSize) => {
    return items.slice().splice((page - 1) * pageSize, pageSize);
  };

  render() {
    const {items, page, pageSize} = this.props;
    const data = this.spliceData(items, page, pageSize);

    return (
          data.map((item) => (
            this.props.getContent(item)
          ))
    );
  }
}

export default NfPaginationContainer;