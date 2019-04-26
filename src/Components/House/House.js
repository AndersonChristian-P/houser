import React, { Component } from "react"

export default class House extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let id = this.props.item.id
    this.props.deleteHouse(id)
  }

  render() {

    let { item } = this.props
    console.log(item)

    return (
      <div>

        <button onClick={this.handleClick} >Delete</button>

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


// this.props.deleteHouse(name)