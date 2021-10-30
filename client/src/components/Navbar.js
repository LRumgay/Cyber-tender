import React, { Component } from 'react'

class Navbar extends Component {

// SideNav slide function
  componentDidMount(){
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });
  }

  render() {
    return (
      <div>
          <nav className="grey darken-4">
    <div className="nav-wrapper">
    <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
      <a href="#" className="brand-logo center"></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a className="modal-trigger" href="collapsible.html" data-target="modal1"></a></li>
      </ul>
    </div>
    </nav>
  <ul id="slide-out" class="sidenav">
    <li><div class="user-view">
      <div class="background grey darken-3">
      </div>
    </div></li>
    <li><a href="#!"><i class="material-icons light-green-text">home</i>Home</a></li>
    <li><a href="#!"><i class="material-icons light-green-text">local_bar</i>The Cyber Bar</a></li>
    <li><a href="#!"><i class="material-icons light-green-text">people</i>About Us</a></li>
  </ul>
  </div>

    )
  }
}

export default Navbar

