import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default class WizardStep3 extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0,
      img: "",
      mortgage: 0,
      rent: 0
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
          <button>Previous Step</button>
        </Link>

        <button onClick={this.createHouse} >Complete</button>


      </div>
    )
  }

}