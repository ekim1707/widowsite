import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(<>
      <div className="navbar">
        <Link to='/' className="navs" id="home" ><i className="medium material-icons">home</i></Link>
        <Link to='/overview' className="navs" id="overview" ><i className="medium material-icons">people</i></Link>
        <Link to='/videos' className="navs" id="videos" ><i className="medium material-icons">ondemand_video</i></Link>
        <Link to='/forum' className="navs" id="forum" ><i className="medium material-icons">forum</i></Link>
      </div>
    </>)
  }
}
export default Nav;