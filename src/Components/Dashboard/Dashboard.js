import React, { Component } from "react"
import House from "./../House/House"
import { Link } from "react-router-dom"

export default class Dashboard extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <div>Dashboard
        <House />

        <Link to="/wizard" >
          <button>Add New Property</button>
        </Link>

      </div>

    )
  }
}