import React, { Component } from "react"
import "./House.css"

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

    return (
      <div className="house">

        <span className="delete-button" onClick={this.handleClick} >Delete</span>

        <div className="hero">
          <img src={item.img} width="200" alt="#" />
          <div className="primary-view">
            <div>Property Name: {item.name} </div>
            <div>Address: {item.address} </div>
            <div>City: {item.city} </div>
            <div>State: {item.state} </div>
            <div>Zip: {item.zip}</div>

          </div>

          <div className="secondary-view">
            <div>Monthly Mortgage: {item.mortgage}</div>
            <div>Desired Rent: {item.rent}</div>
          </div>

        </div>

        <hr />
      </div>
    )
  }
}


// this.props.deleteHouse(name)