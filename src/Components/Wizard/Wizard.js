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

    }
  }

  cancelInput() {
    store.dispatch({ type: CLEAR })
  }

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