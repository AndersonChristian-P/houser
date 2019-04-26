import { createStore } from "redux"


let initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: 0,
  img: "",
  mortgage: 0,
  rent: 0
}

export const GET_HOUSE_DATA = "GET_HOUSE_DATA"

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_HOUSE_DATA:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default createStore(reducer)


