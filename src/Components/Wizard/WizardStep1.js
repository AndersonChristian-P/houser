import React, { Component } from "react"
import { Link } from "react-router-dom"
import store, { GET_HOUSE_DATA } from "./../../ducks/store"

export default class WizardStep1 extends Component {
  constructor() {
    super()

    const reduxState = store.getState()

    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState()
      this.setState({
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip
      })
    })
  }

  addHouseInfo() {
    store.dispatch({ type: GET_HOUSE_DATA, payload: this.state })
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
        <h1>Add New Listing</h1>

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

        <Link to="/wizard/step2" >
          <button onClick={() => this.addHouseInfo()} >Next Step</button>
        </Link>


      </div>
    )
  }

}


      // img: "",
      // mortgage: 0,
      // rent: 0