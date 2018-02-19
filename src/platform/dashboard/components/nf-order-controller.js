import NfGraphController from '../../../components/graph-controller/nf-graph-controller';
import {changeMode, moveOnTime} from '../../../actions/orders';

import {connect} from 'react-redux';


const NfOrderController = connect((state) => {
  const {mode, date} = state.orders;
  return ({mode, date});
}, (dispatch) => {
  return ({
    onModeChange: (mode) => dispatch(changeMode(mode)),
    onMoveForward: (date) => dispatch(moveOnTime(date)),
    onMoveBackward: (date) => dispatch(moveOnTime(date)),
  });
})(NfGraphController);

export default NfOrderController;
  