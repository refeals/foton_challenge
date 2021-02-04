import { SET_QUERY } from "../actions/action_types"

const reducer = (state = "", action) => {
  switch (action.type) {
    case SET_QUERY:
      return action.payload
    default:
      return state
  }
}

export default reducer
