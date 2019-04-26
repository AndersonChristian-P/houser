import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class WizardStep2 extends Component {
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

  render() {
    return (
      <div>

        <div>Image URL</div>
        <input
          onChange={this.handleChange}
          name="img"
          value={this.state.img}
          type="text"
        />

        <Link to="/wizard/step1" >
          <button>Previous Step</button>
        </Link>

        <Link to="/wizard/step3" >
          <button>Next Step</button>
        </Link>

      </div>
    )
  }

}