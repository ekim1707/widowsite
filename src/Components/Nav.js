import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

class Nav extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(<>
      <div className="navbar">
        <NavLink exact to='/' className="navs" id="home" ><i className="medium material-icons">home</i></NavLink>
        <NavLink to='/overview' className="navs" id="overview" ><i className="medium material-icons">people</i></NavLink>
        <NavLink to='/videos' className="navs" id="videos" ><i className="medium material-icons">ondemand_video</i></NavLink>
        <NavLink to='/forum' className="navs" id="forum" ><i className="medium material-icons">forum</i></NavLink>
      </div>
    </>)
  }
}
export default Nav;