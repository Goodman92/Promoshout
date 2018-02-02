import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Pagination from './pagination';

import './nf-pagination.css';

class NfPagination extends Component {

  constructor(props) {
    super(props);
    this.pagination = new Pagination(props.pageSize, props.stackSize(), props.boxCount);
    this.state = {
      pages: this.pagination.getPages()
    };
  };

  onPageClick = (e, page) => {
    e.preventDefault();
    this.setState({pages: this.pagination.jumpToPage(page)});
    this.props.move(this.pagination.getCurrentPage());
  };

  onPreviousClick = (e) => {
    e.preventDefault();
    if (this.pagination.canMove(-1)) {
      this.setState({pages: this.pagination.previousPage()});
      this.props.move(this.pagination.getCurrentPage());
    }
  };

  onNextClick = (e) => {
    e.preventDefault();
    if (this.pagination.canMove(1)) {
      this.setState({pages: this.pagination.nextPage()});
      this.props.move(this.pagination.getCurrentPage());
    }
  };

  render() {
    const getActive = (page) => {
      if (this.pagination.isActivePage(page))
        return "page-item active";
      return "page-item";
    };

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="" onClick={this.onPreviousClick}>Previous</a>
          </li>
          {
            this.state.pages.map((item) => (
              <li className={getActive(item)} key={item}>
                <a className="page-link" href="" onClick={(e) => this.onPageClick(e, item)}>{item}</a>
              </li>
            ))
          }
          <li className="page-item">
            <a className="page-link" href="" onClick={this.onNextClick}>Next</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NfPagination;