import { api } from "../api"
import { GET_BOOKS, UPDATE_BOOKS } from "./action_types"

export const getBooks = (q, onSuccess) => (dispatch) => {
  return api
    .get(`/`, { params: { q, maxResults: 22, startIndex: 0 } })
    .then(({ data }) => {
      dispatch({ type: GET_BOOKS, payload: data })
      onSuccess && onSuccess()
    })
    .catch((err) => console.log(err))
}

export const getMoreBooks = (q, maxResults = 22, startIndex = 0, onSuccess) => (
  dispatch,
) => {
  return api
    .get(`/`, { params: { q, maxResults, startIndex } })
    .then(({ data }) => {
      dispatch({ type: UPDATE_BOOKS, payload: data })
      onSuccess && onSuccess()
    })
    .catch((err) => console.log(err))
}
