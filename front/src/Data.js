import React, { Component } from 'react'

export default class Data extends Component {

  constructor (props) {
    super(props);
    this.state = {
      name: "",
      location: ""
    };
  }

  componentDidMount () {
    fetch('/api')
    .then(res => res.json())
    .then(res => {
      //console.log(res);
      this.setState({ 
        name: res ? res.name : null,
        location: res ? res.location : null 
      });
    })
    .catch(rej => {
      console.error(rej);
    });
  }

  render() {
    const { name, location } = this.state;

    return (
      <p>{ name }<br /><small>{ location }</small></p>
    );
  }
}
