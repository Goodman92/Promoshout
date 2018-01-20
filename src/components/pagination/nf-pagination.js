import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Pagination from './pagination';

import './nf-pagination.css';

class NfPagination extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
    pageSize: PropTypes.number.isRequired,
    boxCount: PropTypes.number.isRequired,
    move: PropTypes.func.isRequired,
    stackSize: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.pagination = new Pagination(props.pageSize, props.stackSize(), props.boxCount);
    this.state = {
      pages: this.pagination.getPages()
    };
  };

  // update redux
  onPageClick = (e, page) => {
    e.preventDefault();
    this.setState({pages: this.pagination.jumpToPage(page)});
    const currentPage = this.pagination.getCurrentPage();
    this.props.move(currentPage);
  };

  onPreviousClick = (e) => {
    e.preventDefault();
    if (this.pagination.canMove(-1)) {
      this.setState({pages: this.pagination.previousPage()});
      const currentPage = this.pagination.getCurrentPage();
      this.props.move(currentPage);
    }
  };

  onNextClick = (e) => {
    e.preventDefault();
    if (this.pagination.canMove(1)) {
      this.setState({pages: this.pagination.nextPage()});
      const currentPage = this.pagination.getCurrentPage();
      this.props.move(currentPage);
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
            <a className="page-link" href="#" onClick={this.onPreviousClick}>Previous</a>
          </li>
          {
            this.state.pages.map((item) => (
              <li className={getActive(item)} key={item}>
                <a className="page-link" href="#" onClick={(e) => this.onPageClick(e, item)}>{item}</a>
              </li>
            ))
          }
          <li className="page-item">
            <a className="page-link" href="#" onClick={this.onNextClick}>Next</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NfPagination;