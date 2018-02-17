import React, {Component} from 'react';
import GraphTimeController from './graph-time-controller';
import './nf-graph-controller.css';

class NfGraphController extends Component {

  onMoveBackward = () => {
    const {mode, date} = this.props;
    const newDate = GraphTimeController.moveOnTimeByUnits(mode, date, -1);
    this.props.onMoveBackward(newDate);
  };

  onMoveForward = () => {
    const {mode, date} = this.props;
    const newDate = GraphTimeController.moveOnTimeByUnits(mode, date, 1);
    this.props.onMoveForward(newDate);
  };

  render() {
    const isSelected = (mode) => {
      return mode === this.props.mode ? 'mode-active' : '';
    };

    return (
        <div className="btn-group btn-group-sm" role="group">
          <button type="button" className="btn btn-secondary" onClick={this.onMoveBackward}>
            <i className="fa fa-backward"/>
          </button>
          <button type="button" className={["btn btn-secondary", isSelected('d')].join(" ")}
                  onClick={() => this.props.onModeChange('d')}>Daily
          </button>
          <button type="button" className={["btn btn-secondary", isSelected('w')].join(" ")}
                  onClick={() => this.props.onModeChange('w')}>Weekly
          </button>
          <button type="button" className={["btn btn-secondary", isSelected('m')].join(" ")}
                  onClick={() => this.props.onModeChange('m')}>Monthly
          </button>
          <button type="button" className={["btn btn-secondary", isSelected()].join(" ")}
                  onClick={this.onMoveForward}><i className="fa fa-forward"/></button>
        </div>
    );
  }
}

export default NfGraphController;