import React, {Component} from 'react';

class NfOrderPopup extends Component {

  constructor(props) {
    super(props);
    this.state = {...props};
  }

  render() {

    return (
        <form>
          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" rows="3" value={this.state.title}
                      onChange={(e) => this.setState({title: e.target.value})}/>
          </div>
          <div className="btn-block order-confirmation-block">
            <button type="button" className="btn btn-success" onClick={() => this.props.onSubmit({...this.state})}>Save</button>
            <button type="button" className="btn btn-danger" onClick={() => this.props.onRemove({...this.state})}>Remove</button>
          </div>
        </form>
    );
  }
}

export default NfOrderPopup;
