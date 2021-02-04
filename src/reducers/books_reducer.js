import {
  GET_BOOKS,
  UPDATE_BOOKS,
  TOGGLE_FAVORITE,
  GIVE_BOOK_STARS,
  SET_FILTER,
  SET_BOOKS_INITIAL,
} from "../actions/action_types"

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...action.payload,
        loadedItems: action.payload.items.length,
        filter: "",
      }
    case UPDATE_BOOKS:
      return {
        ...state,
        ...action.payload,
        items: [...state.items, ...action.payload.items],
        loadedItems: state.loadedItems + action.payload.items.length,
      }
    case TOGGLE_FAVORITE:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id !== action.payload) {
            return item
          } else {
            return { ...item, favorited: !item.favorited }
          }
        }),
      }
    case GIVE_BOOK_STARS:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id !== action.payload.bookId) {
            return item
          } else {
            return { ...item, stars: action.payload.value }
          }
        }),
      }
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      }
    case SET_BOOKS_INITIAL:
      return initialState
    default:
      return state
  }
}

export default reducer
