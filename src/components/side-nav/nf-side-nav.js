import React, {Component} from 'react';
import './nf-side-nav.css';


class NfSideNav extends Component {

  render = () => {
    return (
        <nav id="sidebar" className="nf-sidebar">
          <div className="sidebar-header">
            <figure>
              <img src="http://exprostudio.com/html/classified/images/author/img-02.jpg"
                   className="rounded-circle" height="70" width="70"/>
            </figure>
            <h4 className="text-left"> @SHRG</h4>
          </div>

          <ul className="list-unstyled nav-list-items">
            <li className="active">
              <a href="#">
                <i className="fa fa-th-large"/>
                <span> Dashboard </span>
              </a>
            </li>
            <li>
              <a href="#"> <i className="fa fa-suitcase"/>
                <span> Open Offers </span></a>
            </li>
            <li>
              <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                <i className="fa fa-check"/>
                <span> Past Deals </span></a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <a href="#">Page</a>
                </li>
                <li>
                  <a href="#">Page</a>
                </li>
                <li>
                  <a href="#">Page</a>
                </li>
              </ul>
              <li>
                <a href="#"> <i className="fa fa-cog"/>
                  <span> Settings </span></a>
              </li>
              <li>
                <a href="#"> <i className="fa fa-ticket"/>
                  <span> Tickets </span></a>
              </li>
              <li>
                <a href="#"> <i className="fa fa-university"/>
                  <span> Bank </span></a>
              </li>
            </li>
          </ul>
        </nav>
    )
  }
}

export default NfSideNav;

