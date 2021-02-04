import { combineReducers } from "redux"
import books from "./books_reducer"
import query from "./query_reducer"

export default combineReducers({
  books,
  query,
})
