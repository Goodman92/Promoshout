import React, {Component} from 'react';
import './nf-general-search.css';

class NfGeneralSearch extends Component {
  render() {
    const optionMock = ['Fitness', 'Sports', 'Animals', 'Traveling', 'Stuff', 'More stuff'];

    return (
        <div className="general-search">
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-bullhorn" aria-hidden="true"/></span>
            <input type="text" className="form-control" placeholder="What are you looking for? Try"/>
          </div>
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-tags" aria-hidden="true"/></span>
            <select type="text" className="form-control" placeholder="Category">
              <option value="">Select Category</option>
              {optionMock.map((item, index) => (
                  <option key={index} value={item}> {item}</option>
              ))}
            </select>
          </div>
          <span className="input-group-btn">
            <button className="btn btn-success" type="button">Search now</button>
          </span>
        </div>
    );
  }
}

export default NfGeneralSearch;
