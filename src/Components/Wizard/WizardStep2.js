import React, { Component } from "react"
import { Link } from "react-router-dom"
import store, { GET_IMG } from "./../../ducks/store"

export default class WizardStep2 extends Component {
  constructor() {
    super()

    const reduxState = store.getState()

    this.state = {
      img: reduxState.img
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState()
      this.setState({
        img: reduxState.img
      })
    })
  }

  addImg() {
    store.dispatch({ type: GET_IMG, payload: this.state.img })
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

        <div>Image URL</div>
        <input
          onChange={this.handleChange}
          name="img"
          value={this.state.img}
          type="text"
        />

        <Link to="/wizard/step1" >
          <button onClick={() => this.addImg()} >Previous Step</button>
        </Link>

        <Link to="/wizard/step3" >
          <button onClick={() => this.addImg()} >Next Step</button>
        </Link>

      </div>
    )
  }

}