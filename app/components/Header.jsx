import React from "react";
import {Link} from "react-router";

if (process.env.BROWSER) {
  require('./../assets/stylesheets/header.scss');
}

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="wrapper">
          <h1>Commie Tracker</h1>
          <nav>
            <ul>
              <li><Link to="/">Airing</Link></li>
              <li><Link to="/archive">Archive</Link></li>
              <li><a href="http://commiesubs.com">Commie</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
