import React, { Component } from "react"
import store, { CLEAR } from "./../../ducks/store"
import { Link, Route } from "react-router-dom"

import WizardStep1 from "./WizardStep1"
import WizardStep2 from "./WizardStep2"
import WizardStep3 from "./WizardStep3"

export default class Wizard extends Component {
  constructor() {
    super()

    this.state = {
      // name: "",
      // address: "",
      // city: "",
      // state: "",
      // zip: 0,
      // img: "",
      // mortgage: 0,
      // rent: 0
    }
    // this.handleChange = this.handleChange.bind(this)
    //   this.createHouse = this.createHouse.bind(this)
  }

  cancelInput() {
    store.dispatch({ type: CLEAR })
  }
  // createHouse() {
  //   const { name, address, city, state, zip, img, mortgage, rent } = this.state
  //   axios.post("/api/house", { name, address, city, state, zip, img, mortgage, rent })
  // }

  // handleChange(event) {
  //   let { name, value } = event.target
  //   this.setState({
  //     [name]: value
  //   })
  //   console.log(this.state)
  // }

  render() {
    return (
      <div>

        <Link to="/" >
          <button onClick={() => this.cancelInput()} >Cancel</button>
        </Link>

        <Route path="/wizard/step1" component={WizardStep1} />
        <Route path="/wizard/step2" component={WizardStep2} />
        <Route path="/wizard/step3" component={WizardStep3} />

      </div >
    )
  }
}


// this.props.navigation.navigate('Dashboard')



        // <div>Property Name</div>
        // <input
        //   onChange={this.handleChange}
        //   name="name"
        //   value={this.state.name}
        //   type="text"
        // />

        // <div>Address</div>
        // <input
        //   onChange={this.handleChange}
        //   name="address"
        //   value={this.state.address}
        //   type="text"
        // />

        // <div>City</div>
        // <input
        //   onChange={this.handleChange}
        //   name="city"
        //   value={this.state.city}
        //   type="text"
        // />

        // <div>State</div>
        // <input
        //   onChange={this.handleChange}
        //   name="state"
        //   value={this.state.state}
        //   type="text"
        // />

        // <div>Zip</div>
        // <input
        //   onChange={this.handleChange}
        //   name="zip"
        //   value={this.state.zip}
        //   type="number"
        // />