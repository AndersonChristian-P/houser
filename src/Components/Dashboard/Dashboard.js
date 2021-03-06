import React, { Component } from "react"
import House from "./../House/House"
import axios from "axios"
import { Link } from "react-router-dom"
import "./Dashboard.css"

export default class Dashboard extends Component {
  constructor() {
    super()

    this.state = {
      houses: []
    }
  }

  componentDidMount() {
    this.getAllHouses()
  }

  getAllHouses = () => {
    axios.get("/api/houses")
      .then(res => {
        this.setState({
          houses: res.data
        })
      })
  }

  deleteHouse = (id) => {
    axios.delete(`/api/house/${id}`)
      .then(res => {
        this.getAllHouses()
      })
  }

  render() {

    let list = this.state.houses.map((item, i) => {
      return <House deleteHouse={this.deleteHouse} item={item} key={i} />
    })

    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <h2>Home Listings</h2>
        <Link to="/wizard/step1" >
          <button>Add New Property</button>
        </Link>

        {list}

      </div>

    )
  }
}