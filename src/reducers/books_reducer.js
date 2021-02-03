import { GET_BOOKS } from "../actions/action_types"

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload
    default:
      return state
  }
}

export default reducer
