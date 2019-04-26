import React, { Component } from "react"

export default class House extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {

    let { item } = this.props

    return (
      <div>

        <button>Delete</button>

        <div>Property Name: {item.name} </div>
        <div>Address: {item.address} </div>
        <div>City: {item.city} </div>
        <div>State: {item.state} </div>
        <div>Zip: {item.zip}</div>
        <img src={item.img} width="200" alt="#" />
        <br />
      </div>
    )
  }
}