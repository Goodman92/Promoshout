import React, {Component} from 'react';
import NfSendTicket from './components/nf-send-ticket';
import NfTicketTable from './components/nf-ticket-table';

import './tickets.css';


export default class Tickets extends Component {

  render() {
    return (
      <div>
        <NfSendTicket />
        <NfTicketTable />     
      </div>
    );
  }
}
