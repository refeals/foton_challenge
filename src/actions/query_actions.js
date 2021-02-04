import { SET_QUERY } from "./action_types"

export const setQuery = (value) => (dispatch) => {
  dispatch({ type: SET_QUERY, payload: value })
}
