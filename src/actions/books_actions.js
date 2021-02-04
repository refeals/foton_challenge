import { api } from "../api"
import {
  GET_BOOKS,
  UPDATE_BOOKS,
  TOGGLE_FAVORITE,
  GIVE_BOOK_STARS,
  SET_FILTER,
  SET_BOOKS_INITIAL,
} from "./action_types"

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

export const toggleFavorite = (bookId) => (dispatch) => {
  dispatch({ type: TOGGLE_FAVORITE, payload: bookId })
}

export const giveBookStars = (bookId, value) => (dispatch) => {
  dispatch({ type: GIVE_BOOK_STARS, payload: { bookId, value } })
}

export const setFilter = (value) => (dispatch) => {
  dispatch({ type: SET_FILTER, payload: value })
}

export const setBooksInitial = () => (dispatch) => {
  dispatch({ type: SET_BOOKS_INITIAL })
}
