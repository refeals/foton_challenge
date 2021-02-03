import { api } from "../api"
import { GET_BOOKS } from "./action_types"

export const getBooks = (query) => (dispatch) => {
  return api
    .get(`/`, { params: { q: query } })
    .then(({ data }) => dispatch({ type: GET_BOOKS, payload: data }))
    .catch((err) => console.log(err))
}
