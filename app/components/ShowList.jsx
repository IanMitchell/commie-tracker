import React from "react";
import Show from "./Show";

if (process.env.BROWSER) {
  require('./../assets/stylesheets/layout.scss');
}

export default class ShowList extends React.Component {
  render() {
    if (this.props.lists) {
      return (
        <div id="show-list">
          { this.props.lists.map(list => {
            return (
              <div>
                <h2>{ list.title }</h2>
                <section id={ list.title.toLowerCase() }>
                  { list.shows.map((show, i) => {
                    return (<Show key={i} show={show} />);
                  }) }
                </section>
              </div>
            );
          }) }
        </div>
      );
    }
    else {
      return (
        <div id="show-list">
          <h2>Loading...</h2>
        </div>
      );
    }
  }
}
