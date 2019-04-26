import React, { Component } from "react"
import House from "./../House/House"
import axios from "axios"
import { Link } from "react-router-dom"

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
        console.log(res.data)
      })
  }

  render() {

    let list = this.state.houses.map((item, i) => {
      return <House item={item} key={i} />
    })

    return (
      <div>
        Dashboard

        <Link to="/wizard" >
          <button>Add New Property</button>
        </Link>

        {list}

      </div>

    )
  }
}