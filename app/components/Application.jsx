import React from "react";
import Header from "./Header";

if (process.env.BROWSER) {
  require('./../assets/stylesheets/base.scss');
}

export default class Application extends React.Component {
  render() {
    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    );
  }
}
