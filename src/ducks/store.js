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
export const GET_IMG = "GET_IMG"
export const GET_MORT_RENT = "GET_MORT_RENT"
export const CLEAR = "CLEAR"

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_HOUSE_DATA:
      return { ...state, ...payload }
    case GET_IMG:
      return { ...state, img: payload }
    case GET_MORT_RENT:
      return { ...state, ...payload }
    case CLEAR:
      return { name: "", address: "", city: "", state: "", zip: 0, img: "", mortgage: 0, rent: 0 }
    default:
      return state
  }
}

export default createStore(reducer)


