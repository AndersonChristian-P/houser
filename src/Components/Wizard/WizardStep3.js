import React, { Component } from "react"
import axios from "axios"
import store, { GET_MORT_RENT } from "./../../ducks/store"
import { Link } from "react-router-dom"

export default class WizardStep3 extends Component {
  constructor() {
    super()

    const reduxState = store.getState()

    this.state = {
      mortgage: reduxState.mortgage,
      rent: reduxState.rent
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState()
      this.setState({
        mortgage: reduxState.mortgage,
        rent: reduxState.rent
      })
    })
  }

  addMortRent() {
    store.dispatch({ type: GET_MORT_RENT, payload: this.state })
  }

  handleChange(event) {
    let { name, value } = event.target
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  createHouse() {
    const { name, address, city, state, zip, img, mortgage, rent } = this.state
    axios.post("/api/house", { name, address, city, state, zip, img, mortgage, rent })
  }

  render() {
    return (
      <div>

        <div>Monthly Mortgage Amount</div>
        <input
          onChange={this.handleChange}
          name="mortgage"
          value={this.state.mortgage}
          type="number"
        />

        <div>Desired Monthly Rent</div>
        <input
          onChange={this.handleChange}
          name="rent"
          value={this.state.rent}
          type="number"
        />

        <Link to="/wizard/step2" >
          <button onClick={() => this.addMortRent()}>Previous Step</button>
        </Link>

        <button onClick={this.createHouse} >Complete</button>


      </div>
    )
  }

}