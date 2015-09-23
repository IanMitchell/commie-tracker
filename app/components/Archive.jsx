import React from "react";
import ShowList from "./ShowList";

export default class Archive extends React.Component {
  constructor() {
    super();

    this.state = {
      lists: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/shows/completed.json')
      .then(response => response.json())
        .then(data => {
          this.setState({
            lists: this.state.lists.concat({
              title: 'Completed',
              shows: JSON.parse(data),
            }),
          });
        })
        .catch(e => console.log("Error retrieving Completed data: " + e));

    fetch('http://localhost:3000/shows/incomplete.json')
      .then(response => response.json())
        .then(data => {
          this.setState({
            lists: this.state.lists.concat({
              title: 'Incomplete',
              shows: JSON.parse(data),
            }),
          });
        })
        .catch(e => console.log("Error retrieving Incomplete data: " + e));

    fetch('http://localhost:3000/shows/dropped.json')
      .then(response => response.json())
        .then(data => {
          this.setState({
            lists: this.state.lists.concat({
              title: 'Dropped',
              shows: JSON.parse(data),
            }),
          });
        })
        .catch(e => console.log("Error retrieving Dropped data: " + e));
  }

  render() {
    return (
      <ShowList lists={ this.state.lists } />
    );
  }
}
