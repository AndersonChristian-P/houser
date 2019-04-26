import React, { Component } from "react"

export default class Wizard extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let { name, value } = event.target
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>

        <div>Property Name</div>
        <input
          onChange={this.handleChange}
          name="name"
          value={this.state.name}
          type="text"
        />

        <div>Address</div>
        <input
          onChange={this.handleChange}
          name="address"
          value={this.state.address}
          type="text"
        />

        <div>City</div>
        <input
          onChange={this.handleChange}
          name="city"
          value={this.state.city}
          type="text"
        />

        <div>State</div>
        <input
          onChange={this.handleChange}
          name="state"
          value={this.state.state}
          type="text"
        />

        <div>Zip</div>
        <input
          onChange={this.handleChange}
          name="zip"
          value={this.state.zip}
          type="number"
        />


      </div>
    )
  }
}