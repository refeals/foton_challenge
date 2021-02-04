import {
  GET_BOOKS,
  UPDATE_BOOKS,
  TOGGLE_FAVORITE,
} from "../actions/action_types"

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...action.payload, loadedItems: action.payload.items.length }
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
    default:
      return state
  }
}

export default reducer
