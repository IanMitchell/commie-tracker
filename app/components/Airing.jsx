import React from "react";
import ShowList from "./ShowList";

export default class Airing extends React.Component {
  constructor() {
    super();

    this.state = {
      lists: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/shows/airing.json')
      .then(response => response.json())
        .then(data => {
          this.setState({
            lists: this.state.lists.concat({
              title: 'Airing',
              shows: JSON.parse(data),
            }),
          });
        })
        .catch(e => console.log("Error retrieving Airing data: " + e));
  }

  render() {
    return (
      <ShowList lists={ this.state.lists } />
    );
  }
}
